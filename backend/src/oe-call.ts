// Call ANY Ocean Engine (巨量营销 / 巨量千川) interface by path — so all 670
// registered interfaces are reachable, not just the demo ones.
//
//   npm run oe-call -- <advertiser_id> <path> '<json_params>' [GET|POST]
//   e.g. npm run oe-call -- 1866609433950220 /open_api/2/advertiser/info/ "{}" GET
import { pool, query } from './db/index.js';

const HOST = 'https://api.oceanengine.com';

async function main() {
  const [advId, path, paramsJson, methodArg] = process.argv.slice(2);
  if (!advId || !path) {
    console.error("Usage: npm run oe-call -- <advertiser_id> <path> '<json_params>' [GET|POST]");
    process.exit(1);
  }
  const params = paramsJson ? JSON.parse(paramsJson) : {};
  const method = (methodArg || 'GET').toUpperCase();

  const creds = await query<any>(
    `SELECT access_token FROM platform_credentials
      WHERE platform IN ('qianchuan','oceanengine') AND status = 'active'
      ORDER BY updated_at DESC LIMIT 1`
  );
  const token = creds[0]?.access_token;
  if (!token) { console.error('No Ocean Engine token. Run "npm run get-token" first.'); await pool.end(); process.exit(1); }

  const headers: Record<string,string> = { 'Access-Token': token, 'Content-Type': 'application/json' };
  let url = HOST + path; let body: string | undefined;
  if (method === 'GET') {
    const flat: Record<string,string> = { advertiser_id: advId };
    for (const [k,v] of Object.entries(params)) flat[k] = typeof v === 'string' ? v : JSON.stringify(v);
    url += '?' + new URLSearchParams(flat).toString();
  } else {
    body = JSON.stringify({ advertiser_id: Number(advId), ...params });
  }

  console.log(`[${method}] ${path}`);
  const res = await fetch(url, { method, headers, body });
  const json: any = await res.json();
  console.log(`code: ${json.code}  msg: ${json.message ?? ''}`);
  console.log(JSON.stringify(json, null, 2).slice(0, 4000));
  await query(
    `INSERT INTO ingested_data (platform, endpoint_code, shop_id, record_key, data)
     VALUES ('oceanengine', $1, $2, $3, $4)
     ON CONFLICT (endpoint_code, record_key) DO UPDATE SET data = EXCLUDED.data, fetched_at = now()`,
    ['oe.call' + path, advId, path + '-' + Date.now(), json]
  );
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
