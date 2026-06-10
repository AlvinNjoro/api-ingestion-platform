// Pull REAL data from the platform using the token we stored earlier.
//
//   npm run pull
//
// Reads the stored 'qianchuan' credential, calls the live Ocean Engine
// advertiser-info API with its Access-Token, prints the real account info,
// and saves it into the ingested_data table (so it shows on the dashboard).

import { pool, query } from './db/index.js';

const API = 'https://ad.oceanengine.com/open_api/2/advertiser/info/';

async function main() {
  // 1. load the live credential we created with get-token
  const creds = await query<any>(
    `SELECT shop_id, access_token FROM platform_credentials
      WHERE platform = 'qianchuan' AND status = 'active'
      ORDER BY updated_at DESC LIMIT 1`
  );
  const cred = creds[0];
  if (!cred) {
    console.error('No active qianchuan credential found. Run "npm run get-token" first.');
    await pool.end();
    process.exit(1);
  }

  const advertiserId = Number(process.argv[2] || cred.shop_id);
  console.log(`Fetching live account info for advertiser ${advertiserId}...`);

  // 2. call the real API (token goes in the Access-Token header)
  const url = `${API}?advertiser_ids=${encodeURIComponent(`[${advertiserId}]`)}`;
  const res = await fetch(url, { headers: { 'Access-Token': cred.access_token } });
  const json: any = await res.json();

  if (json.code !== 0) {
    console.error(`\nPlatform returned an error (code ${json.code}): ${json.message}`);
    console.error('Full response:', JSON.stringify(json, null, 2));
    await pool.end();
    process.exit(1);
  }

  // 3. normalize whatever shape the data comes back in
  const data = json.data;
  const records: any[] = Array.isArray(data)
    ? data
    : Array.isArray(data?.list)
    ? data.list
    : typeof data === 'object'
    ? Object.values(data)
    : [];

  // 4. store each record into the generic landing table
  let stored = 0;
  for (const r of records) {
    const key = String(r.id ?? r.advertiser_id ?? advertiserId);
    await query(
      `INSERT INTO ingested_data (platform, endpoint_code, shop_id, record_key, data)
       VALUES ('qianchuan', 'qianchuan.advertiser_info', $1, $2, $3)
       ON CONFLICT (endpoint_code, record_key) DO UPDATE
         SET data = EXCLUDED.data, fetched_at = now()`,
      [String(advertiserId), key, r]
    );
    stored++;
  }

  console.log('\n✅ Live data pulled and stored.');
  console.log(`   Records: ${stored}`);
  const first = records[0] || {};
  if (first.name || first.company) {
    console.log(`   Account name: ${first.name ?? '(n/a)'}`);
    console.log(`   Company: ${first.company ?? '(n/a)'}`);
  }
  console.log('\nFull response from the platform:');
  console.log(JSON.stringify(json, null, 2));
  console.log('\nThis shows up in "Rows ingested" on your dashboard.');
  await pool.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});