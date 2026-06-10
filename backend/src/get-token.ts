// One-time helper: turn a fresh auth_code into a stored Qianchuan access token.
//
//   npm run get-token -- <AUTH_CODE>
//
// Reads QIANCHUAN_APP_ID and QIANCHUAN_SECRET from backend/.env, calls the
// Ocean Engine / Qianchuan token endpoint, and saves the result into the
// platform_credentials table (platform = 'qianchuan'). The auth_code is only
// valid ~10 minutes, so grab it and run this promptly.

import { pool, query } from './db/index.js';

const TOKEN_URL = 'https://ad.oceanengine.com/open_api/oauth2/access_token/';

async function main() {
  const authCode = process.argv[2];
  const appId = process.env.QIANCHUAN_APP_ID;
  const secret = process.env.QIANCHUAN_SECRET;

  if (!authCode) {
    console.error('Usage: npm run get-token -- <AUTH_CODE>');
    process.exit(1);
  }
  if (!appId || !secret) {
    console.error('Missing QIANCHUAN_APP_ID or QIANCHUAN_SECRET in backend/.env');
    process.exit(1);
  }

  console.log('Exchanging auth_code for a token...');
  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      app_id: Number(appId),
      secret,
      grant_type: 'auth_code',
      auth_code: authCode,
    }),
  });

  const json: any = await res.json();
  if (json.code !== 0) {
    console.error(`\nPlatform rejected the request (code ${json.code}): ${json.message}`);
    console.error('Common causes: the auth_code expired (>10 min), wrong Secret, or your IP is not whitelisted.');
    console.error('Full response:', JSON.stringify(json, null, 2));
    await pool.end();
    process.exit(1);
  }

  const d = json.data;
  const advertiserId = String(d.advertiser_id ?? (d.advertiser_ids && d.advertiser_ids[0]) ?? 'unknown');
  const expiresAt = new Date(Date.now() + (d.expires_in ?? 86400) * 1000);

  await query(
    `INSERT INTO platform_credentials
       (platform, shop_id, display_name, access_token, refresh_token, expires_at, extra, status)
     VALUES ('qianchuan', $1, $2, $3, $4, $5, $6, 'active')
     ON CONFLICT (platform, shop_id) DO UPDATE
       SET access_token = EXCLUDED.access_token,
           refresh_token = EXCLUDED.refresh_token,
           expires_at = EXCLUDED.expires_at,
           extra = EXCLUDED.extra,
           status = 'active',
           updated_at = now()`,
    [
      advertiserId,
      `Qianchuan ${advertiserId}`,
      d.access_token,
      d.refresh_token,
      expiresAt,
      { app_id: appId, advertiser_ids: d.advertiser_ids ?? [] },
    ]
  );

  console.log('\n✅ Success! Token stored.');
  console.log(`   Advertiser account(s) authorized: ${(d.advertiser_ids ?? [d.advertiser_id]).join(', ')}`);
  console.log(`   Token valid until: ${expiresAt.toLocaleString()}`);
  console.log('\nThis advertiser now appears under "Connected shops" on your dashboard.');
  await pool.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});