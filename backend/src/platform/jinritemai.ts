import crypto from 'node:crypto';
import type {
  PlatformAdapter,
  EndpointConfig,
  Credential,
  FetchResult,
} from './adapter.js';

// Skeleton for Douyin Store (jinritemai). The real request signing, token
// refresh, and response shape come from the API docs we organized earlier.
// Endpoints like /order/searchList and /order/orderDetail map straight onto
// the `endpoints` table — only the signing + base URL differ from `mock`.
const BASE_URL = 'https://openapi-fxg.jinritemai.com';

export const jinritemaiAdapter: PlatformAdapter = {
  platform: 'jinritemai',

  async fetch(endpoint: EndpointConfig, cred: Credential, params, cursor): Promise<FetchResult> {
    const appKey = cred.extra.app_key as string;
    const appSecret = cred.extra.app_secret as string;
    const timestamp = Math.floor(Date.now() / 1000);

    const allParams = { ...endpoint.default_params, ...params };
    // jinritemai signs a canonical string of sorted params; fill from docs:
    const sign = signJinritemai(endpoint.path, allParams, appKey, appSecret, timestamp);

    const url = new URL(BASE_URL + endpoint.path);
    url.searchParams.set('app_key', appKey);
    url.searchParams.set('timestamp', String(timestamp));
    url.searchParams.set('sign', sign);
    url.searchParams.set('access_token', cred.access_token || '');
    url.searchParams.set('param_json', JSON.stringify(allParams));

    const res = await fetch(url.toString(), { method: endpoint.http_method });
    const json: any = await res.json();

    // TODO: shape this to the real response per docs (data.order_list, page_info...)
    const records = json?.data?.list ?? json?.data ?? [];
    const nextCursor = endpoint.incremental_key
      ? String(records.at(-1)?.[endpoint.incremental_key] ?? cursor ?? '')
      : undefined;
    return { records, nextCursor, rawResponse: json };
  },

  verifySignature(headers, rawBody, secret) {
    const sig = headers['x-signature'] || '';
    const expected = crypto.createHmac('sha256', secret).update(rawBody).digest('hex');
    return Boolean(sig) && sig === expected;
  },

  parseCallback(body) {
    return {
      idempotencyKey: body?.msg_id || crypto.randomUUID(),
      callbackType: body?.tag || body?.type || 'unknown',
    };
  },

  async refreshToken(cred: Credential) {
    // POST to the token endpoint with grant_type=refresh_token (see docs)
    throw new Error('jinritemai.refreshToken not implemented — fill in from docs');
  },
};

function signJinritemai(
  path: string,
  params: Record<string, any>,
  appKey: string,
  appSecret: string,
  ts: number
): string {
  const paramJson = JSON.stringify(params);
  const canonical = `app_key${appKey}method${path}param_json${paramJson}timestamp${ts}`;
  return crypto.createHmac('sha256', appSecret).update(canonical).digest('hex');
}
