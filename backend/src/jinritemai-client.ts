// Douyin Shop (抖店 / jinritemai) client.
//
// Implements the platform's required HMAC-SHA256 request signing, plus token
// create/refresh and a generic "call any method" helper. Every 抖店 interface
// is reachable through ddRequest(), so this single client covers them all.
//
// Docs: https://op.jinritemai.com/docs   Base: https://openapi-fxg.jinritemai.com
//
// NOTE: This is built and ready, but cannot be tested live until the shop's
// API qualification (资质) is approved and a real app_key/app_secret + token
// are available. The signing follows the documented v2 algorithm; if the
// platform rejects a signature once live, it's usually a param-ordering detail
// we tune in one place (the sign() function).

import crypto from 'node:crypto';

const HOST = 'https://openapi-fxg.jinritemai.com';
const VERSION = '2';

// 抖店 requires param_json to have its keys sorted (recursively).
function sortKeys(obj: any): any {
  if (Array.isArray(obj)) return obj.map(sortKeys);
  if (obj && typeof obj === 'object') {
    const out: Record<string, any> = {};
    for (const k of Object.keys(obj).sort()) out[k] = sortKeys(obj[k]);
    return out;
  }
  return obj;
}

// Build the HMAC-SHA256 signature over the system params + param_json.
export function sign(
  method: string,
  paramJson: string,
  timestamp: string,
  appKey: string,
  appSecret: string
): string {
  // system params concatenated in alphabetical key order: app_key, method, param_json, timestamp, v
  const signStr = `app_key${appKey}method${method}param_json${paramJson}timestamp${timestamp}v${VERSION}`;
  const pattern = appSecret + signStr + appSecret;
  return crypto.createHmac('sha256', appSecret).update(pattern).digest('hex');
}

export interface DDResult {
  ok: boolean;
  code: number | string;
  msg?: string;
  data?: any;
  raw: any;
}

function creds() {
  const appKey = process.env.DD_APP_KEY;
  const appSecret = process.env.DD_APP_SECRET;
  if (!appKey || !appSecret) {
    throw new Error('Missing DD_APP_KEY / DD_APP_SECRET in backend/.env');
  }
  return { appKey, appSecret };
}

// Call ANY 抖店 interface. method e.g. "order.searchList", path e.g. "/order/searchList".
export async function ddRequest(
  method: string,
  path: string,
  businessParams: Record<string, any>,
  accessToken: string
): Promise<DDResult> {
  const { appKey, appSecret } = creds();
  const timestamp = String(Math.floor(Date.now() / 1000));
  const paramJson = JSON.stringify(sortKeys(businessParams));
  const s = sign(method, paramJson, timestamp, appKey, appSecret);

  const qs = new URLSearchParams({
    method,
    app_key: appKey,
    access_token: accessToken,
    timestamp,
    v: VERSION,
    sign: s,
    sign_method: 'hmac-sha256',
  });
  const url = `${HOST}${path}?${qs.toString()}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: paramJson,
  });
  const json: any = await res.json();
  // 抖店 success is code 10000 (some endpoints use err_no 0).
  const code = json.code ?? json.err_no ?? -1;
  const ok = code === 10000 || code === 0;
  return { ok, code, msg: json.msg ?? json.message ?? json.sub_msg, data: json.data, raw: json };
}

// Create an access token. Self-use shops pass shopId with grant_type
// 'authorization_self'; third-party apps pass the OAuth `code`.
export async function ddCreateToken(opts: { code?: string; shopId?: string; self?: boolean }): Promise<DDResult> {
  const { appKey, appSecret } = creds();
  const method = 'token.create';
  const path = '/token/create';
  const businessParams: Record<string, any> = opts.self
    ? { code: '', grant_type: 'authorization_self', shop_id: opts.shopId }
    : { code: opts.code, grant_type: 'authorization_code' };

  const timestamp = String(Math.floor(Date.now() / 1000));
  const paramJson = JSON.stringify(sortKeys(businessParams));
  const s = sign(method, paramJson, timestamp, appKey, appSecret);
  const qs = new URLSearchParams({
    method,
    app_key: appKey,
    access_token: '', // none yet — this call mints it
    timestamp,
    v: VERSION,
    sign: s,
    sign_method: 'hmac-sha256',
  });
  const url = `${HOST}${path}?${qs.toString()}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: paramJson,
  });
  const json: any = await res.json();
  const code = json.code ?? json.err_no ?? -1;
  const ok = code === 10000 || code === 0;
  return { ok, code, msg: json.msg ?? json.message, data: json.data, raw: json };
}
