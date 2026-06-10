import crypto from 'node:crypto';
import type {
  PlatformAdapter,
  EndpointConfig,
  Credential,
  FetchResult,
} from './adapter.js';

// A fake platform that generates plausible order data, so you can run and
// watch the full pipeline (callback -> fetch -> store) before wiring real APIs.
export const mockAdapter: PlatformAdapter = {
  platform: 'mock',

  async fetch(endpoint: EndpointConfig, cred: Credential, params, cursor): Promise<FetchResult> {
    await new Promise((r) => setTimeout(r, 150)); // pretend network latency
    const now = Date.now();

    if (endpoint.code === 'mock.order_detail') {
      const orderId = String(params.order_id ?? `ord-${now}`);
      return {
        records: [{
          order_id: orderId,
          status: 'PAID',
          total_amount: (Math.random() * 500 + 10).toFixed(2),
          buyer: 'buyer_' + Math.floor(Math.random() * 1000),
          update_time: now,
        }],
        rawResponse: { ok: true },
      };
    }

    // order_list: return a small page of synthetic orders newer than the cursor
    const records = Array.from({ length: 3 }).map((_, i) => ({
      order_id: `ord-${now}-${i}`,
      status: ['PAID', 'SHIPPED', 'REFUND'][i % 3],
      total_amount: (Math.random() * 500 + 10).toFixed(2),
      buyer: 'buyer_' + Math.floor(Math.random() * 1000),
      update_time: now,
    }));
    return { records, nextCursor: String(now), rawResponse: { count: records.length } };
  },

  verifySignature(headers, rawBody, secret) {
    const sig = headers['x-signature'] || '';
    const expected = crypto.createHmac('sha256', secret).update(rawBody).digest('hex');
    // constant-time compare; allow empty sig in dev for convenience
    if (!sig) return true;
    return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
  },

  parseCallback(body) {
    return {
      idempotencyKey: body?.event_id || crypto.randomUUID(),
      callbackType: body?.type || 'unknown',
    };
  },

  async refreshToken(cred: Credential) {
    return {
      accessToken: 'mock-access-' + Date.now(),
      refreshToken: cred.refresh_token || 'mock-refresh',
      expiresAt: new Date(Date.now() + 2 * 3600 * 1000),
    };
  },
};
