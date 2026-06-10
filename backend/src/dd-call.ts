// Call ANY Douyin Shop (抖店) interface — this is how "all interfaces" become
// testable without writing a script per endpoint.
//
//   npm run dd-call -- <shop_id> <method> <path> '<json_params>'
//   e.g.
//   npm run dd-call -- 123456 product.listV2 /product/listV2 "{\"page\":0,\"size\":20}"
//   npm run dd-call -- 123456 afterSale.List /afterSale/List "{\"size\":50}"
//
// Prints the raw response and stores it in ingested_data for inspection.

import { pool, query } from './db/index.js';
import { ddRequest } from './jinritemai-client.js';

async function main() {
  const [shopId, method, path, paramsJson] = process.argv.slice(2);
  if (!shopId || !method || !path) {
    console.error('Usage: npm run dd-call -- <shop_id> <method> <path> \'<json_params>\'');
    process.exit(1);
  }
  const params = paramsJson ? JSON.parse(paramsJson) : {};

  const creds = await query<any>(
    `SELECT access_token FROM platform_credentials
      WHERE platform = 'jinritemai' AND shop_id = $1 AND status = 'active'
      ORDER BY updated_at DESC LIMIT 1`,
    [shopId]
  );
  const token = creds[0]?.access_token;
  if (!token) {
    console.error(`No Douyin Shop token for shop ${shopId}. Run "npm run dd-token" first.`);
    await pool.end();
    process.exit(1);
  }

  console.log(`Calling ${method} ...`);
  const r = await ddRequest(method, path, params, token);
  console.log(`\ncode: ${r.code}  ok: ${r.ok}  msg: ${r.msg ?? ''}`);
  console.log('Full response:');
  console.log(JSON.stringify(r.raw, null, 2).slice(0, 4000));

  // keep a copy for inspection
  await query(
    `INSERT INTO ingested_data (platform, endpoint_code, shop_id, record_key, data)
     VALUES ('jinritemai', $1, $2, $3, $4)
     ON CONFLICT (endpoint_code, record_key) DO UPDATE
       SET data = EXCLUDED.data, fetched_at = now()`,
    [`jinritemai.${method}`, shopId, `${method}-${Date.now()}`, r.raw]
  );
  await pool.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
