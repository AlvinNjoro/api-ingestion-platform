import express from 'express';
import { config } from '../config/index.js';
import { query } from '../db/index.js';
import { getAdapter } from '../platform/adapter.js';
import { enqueueFetch } from '../queue/index.js';
import { pickShop } from '../auth/tokenManager.js';

// Resolve a dotted path like "data.order_id" out of an object.
function getPath(obj: any, path: string): any {
  return path.split('.').reduce((acc, k) => (acc == null ? acc : acc[k]), obj);
}

export function createWebhookServer() {
  const app = express();
  // capture the raw body for signature verification
  app.use(express.json({ verify: (req: any, _res, buf) => (req.rawBody = buf.toString('utf8')) }));

  app.get('/health', (_req, res) => res.json({ ok: true }));

  // The platform calls POST /webhook/:platform
  app.post('/webhook/:platform', async (req: any, res) => {
    const platform = req.params.platform;
    const secret = config.webhookSecrets[platform] || '';

    let adapter;
    try {
      adapter = getAdapter(platform);
    } catch {
      return res.status(404).json({ error: 'unknown platform' });
    }

    // 1) verify signature
    if (!adapter.verifySignature(req.headers as any, req.rawBody || '', secret)) {
      return res.status(401).json({ error: 'bad signature' });
    }

    // 2) parse + dedupe (idempotency). ACK immediately, process async.
    const { idempotencyKey, callbackType } = adapter.parseCallback(req.body);
    let eventId: number;
    try {
      const rows = await query<{ id: number }>(
        `INSERT INTO raw_events (platform, callback_type, idempotency_key, payload)
         VALUES ($1,$2,$3,$4)
         ON CONFLICT (platform, idempotency_key) DO NOTHING
         RETURNING id`,
        [platform, callbackType, idempotencyKey, req.body]
      );
      if (!rows[0]) {
        // duplicate delivery — already have it, ack and stop
        return res.json({ ok: true, duplicate: true });
      }
      eventId = rows[0].id;
    } catch (e: any) {
      return res.status(500).json({ error: e.message });
    }

    // 3) ACK fast so the platform doesn't time out / retry
    res.json({ ok: true });

    // 4) look up routes and enqueue fetch jobs (after responding)
    try {
      const routes = await query<any>(
        `SELECT endpoint_code, param_mapping FROM callback_routes
          WHERE platform = $1 AND callback_type = $2 AND enabled = true`,
        [platform, callbackType]
      );
      const shopId = (await pickShop(platform)) || 'unknown';
      for (const route of routes) {
        const params: Record<string, any> = {};
        for (const [target, src] of Object.entries(route.param_mapping as Record<string, string>)) {
          params[target] = getPath(req.body, src);
        }
        await enqueueFetch({
          platform,
          endpointCode: route.endpoint_code,
          shopId,
          params,
          sourceEventId: eventId,
        });
      }
    } catch (e) {
      console.error('[webhook] routing error', e);
    }
  });

  return app;
}
