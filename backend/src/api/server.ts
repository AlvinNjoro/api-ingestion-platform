import express from 'express';
import cors from 'cors';
import { query } from '../db/index.js';
import { enqueueFetch } from '../queue/index.js';
import { pickShop } from '../auth/tokenManager.js';

export function createApiServer() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  // High-level numbers for the dashboard header
  app.get('/api/stats', async (_req, res) => {
    const [endpoints] = await query<any>(`SELECT count(*)::int n, count(*) FILTER (WHERE enabled)::int active FROM endpoints`);
    const [events] = await query<any>(`SELECT count(*)::int total, count(*) FILTER (WHERE NOT processed)::int pending FROM raw_events`);
    const [errors] = await query<any>(`SELECT count(*)::int n FROM sync_state WHERE last_status = 'error'`);
    const [data] = await query<any>(`SELECT count(*)::int n FROM ingested_data`);
    const [orders] = await query<any>(`SELECT count(*)::int n FROM orders`);
    res.json({ endpoints, events, errors: errors.n, ingested: data.n, orders: orders.n });
  });

  // Endpoint registry joined with its latest sync status
  app.get('/api/endpoints', async (_req, res) => {
    const rows = await query<any>(
      `SELECT e.platform, e.code, e.name, e.http_method, e.path, e.schedule_cron, e.enabled,
              s.last_status, s.last_run_at, s.rows_last_run, s.last_error
         FROM endpoints e
         LEFT JOIN sync_state s ON s.endpoint_code = e.code
        ORDER BY e.platform, e.code`
    );
    res.json(rows);
  });

  // Enable / disable an endpoint
  app.post('/api/endpoints/:code/toggle', async (req, res) => {
    const rows = await query<any>(
      `UPDATE endpoints SET enabled = NOT enabled WHERE code = $1 RETURNING enabled`,
      [req.params.code]
    );
    res.json({ enabled: rows[0]?.enabled });
  });

  // Manually trigger a pull right now
  app.post('/api/endpoints/:code/run', async (req, res) => {
    const rows = await query<any>(`SELECT platform FROM endpoints WHERE code = $1`, [req.params.code]);
    if (!rows[0]) return res.status(404).json({ error: 'not found' });
    const shopId = (await pickShop(rows[0].platform)) || 'unknown';
    await enqueueFetch({ platform: rows[0].platform, endpointCode: req.params.code, shopId, params: req.body?.params || {} });
    res.json({ queued: true });
  });

  // Recent inbound callbacks
  app.get('/api/events', async (_req, res) => {
    const rows = await query<any>(
      `SELECT id, platform, callback_type, processed, received_at
         FROM raw_events ORDER BY received_at DESC LIMIT 50`
    );
    res.json(rows);
  });

  // Recently ingested orders (the headline data)
  app.get('/api/orders', async (_req, res) => {
    const rows = await query<any>(
      `SELECT order_id, platform, shop_id, status, total_amount, buyer, updated_at
         FROM orders ORDER BY updated_at DESC LIMIT 50`
    );
    res.json(rows);
  });

  // Connected shops + token status
  app.get('/api/shops', async (_req, res) => {
    const rows = await query<any>(
      `SELECT platform, shop_id, display_name, status, expires_at FROM platform_credentials ORDER BY platform, shop_id`
    );
    res.json(rows);
  });

  return app;
}
