// Ask the order report what options it accepts (valid data_topic, dimensions, metrics).
//
//   npm run order-config -- <advertiser_id>
//
// Path confirmed from the doc tree:
//   /open_api/v1.0/qianchuan/report/long_transfer/order/config/get/

import { pool, query } from './db/index.js';

const HOST = 'https://api.oceanengine.com';
const PATH = '/open_api/v1.0/qianchuan/report/long_transfer/order/config/get/';

async function main() {
  const advertiserId = process.argv[2];
  if (!advertiserId) {
    console.error('Usage: npm run order-config -- <advertiser_id>');
    process.exit(1);
  }

  const creds = await query<any>(
    `SELECT access_token FROM platform_credentials
      WHERE platform = 'qianchuan' AND status = 'active'
      ORDER BY updated_at DESC LIMIT 1`
  );
  const token = creds[0]?.access_token;
  if (!token) {
    console.error('No active qianchuan token. Run "npm run get-token" first.');
    await pool.end();
    process.exit(1);
  }

  const url = `${HOST}${PATH}?advertiser_id=${encodeURIComponent(advertiserId)}&data_topics=${encodeURIComponent('["LONG_TRANSFER_ORDER"]')}`;
  console.log(`Asking what the order report accepts for advertiser ${advertiserId}...\n`);
  const res = await fetch(url, { headers: { 'Access-Token': token } });
  const json: any = await res.json();

  console.log('Full response:');
  console.log(JSON.stringify(json, null, 2));
  await pool.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});