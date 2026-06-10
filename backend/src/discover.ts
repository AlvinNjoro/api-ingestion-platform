// Discover which accounts this stored token can actually access.
//
//   npm run discover
//
// Calls the Ocean Engine "get authorized accounts" endpoint and prints every
// account the token can reach, along with its role. This tells us whether we
// have real advertisers (role 1) or workbench/agent accounts (role 2/3/4) that
// we need to drill into.

import { pool, query } from './db/index.js';

const API = 'https://ad.oceanengine.com/open_api/oauth2/advertiser/get/';

async function main() {
  const appId = process.env.QIANCHUAN_APP_ID;
  const secret = process.env.QIANCHUAN_SECRET;

  const creds = await query<any>(
    `SELECT access_token FROM platform_credentials
      WHERE platform = 'qianchuan' AND status = 'active'
      ORDER BY updated_at DESC LIMIT 1`
  );
  const token = creds[0]?.access_token;

  if (!appId || !secret || !token) {
    console.error('Missing APP_ID/Secret in .env, or no stored token (run "npm run get-token" first).');
    await pool.end();
    process.exit(1);
  }

  const url =
    `${API}?access_token=${encodeURIComponent(token)}` +
    `&app_id=${encodeURIComponent(appId)}` +
    `&secret=${encodeURIComponent(secret)}`;

  console.log('Asking the platform which accounts this token can access...\n');
  const res = await fetch(url);
  const json: any = await res.json();

  if (json.code !== 0) {
    console.error(`Error (code ${json.code}): ${json.message}`);
    console.error('Full response:', JSON.stringify(json, null, 2));
    await pool.end();
    process.exit(1);
  }

  const list: any[] = json.data?.list ?? (Array.isArray(json.data) ? json.data : []);
  console.log(`✅ The token can access ${list.length} account(s):\n`);
  for (const a of list) {
    console.log(
      `  • advertiser_id: ${a.advertiser_id}   ` +
        `name: ${a.advertiser_name ?? '(n/a)'}   ` +
        `role: ${a.advertiser_role ?? '(n/a)'}`
    );
  }
  console.log('\n  role key: 1 = real advertiser, 2 = organization/workbench, 3/4 = agent\n');
  console.log('Full response:');
  console.log(JSON.stringify(json, null, 2));
  await pool.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});