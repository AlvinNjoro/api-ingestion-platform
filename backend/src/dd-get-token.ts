// Mint and store a Douyin Shop (抖店) access token.
//
//   Self-use shop:   npm run dd-token -- self <shop_id>
//   Third-party app: npm run dd-token -- code <auth_code>
//
// Stores the token in platform_credentials (platform = 'jinritemai').
// Requires DD_APP_KEY / DD_APP_SECRET in backend/.env and an approved
// shop API qualification.

import { pool, query } from './db/index.js';
import { ddCreateToken } from './jinritemai-client.js';

async function main() {
  const mode = process.argv[2];
  const value = process.argv[3];
  if (mode !== 'self' && mode !== 'code') {
    console.error('Usage:\n  npm run dd-token -- self <shop_id>\n  npm run dd-token -- code <auth_code>');
    process.exit(1);
  }

  console.log('Requesting Douyin Shop access token...');
  const r =
    mode === 'self'
      ? await ddCreateToken({ self: true, shopId: value })
      : await ddCreateToken({ code: value });

  if (!r.ok) {
    console.error(`\nPlatform rejected the request (code ${r.code}): ${r.msg}`);
    console.error('Full response:', JSON.stringify(r.raw, null, 2));
    console.error('\nIf the qualification is not yet approved, this is expected — try again once it is.');
    await pool.end();
    process.exit(1);
  }

  const d = r.data;
  const shopId = String(d.shop_id ?? value ?? 'unknown');
  const expiresAt = new Date(Date.now() + (d.expires_in ?? 86400) * 1000);

  await query(
    `INSERT INTO platform_credentials
       (platform, shop_id, display_name, access_token, refresh_token, expires_at, extra, status)
     VALUES ('jinritemai', $1, $2, $3, $4, $5, $6, 'active')
     ON CONFLICT (platform, shop_id) DO UPDATE
       SET access_token = EXCLUDED.access_token, refresh_token = EXCLUDED.refresh_token,
           expires_at = EXCLUDED.expires_at, extra = EXCLUDED.extra,
           status = 'active', updated_at = now()`,
    [shopId, d.shop_name ?? `Douyin Shop ${shopId}`, d.access_token, d.refresh_token, expiresAt, d]
  );

  console.log('\n✅ Douyin Shop token stored.');
  console.log(`   shop_id: ${shopId}`);
  console.log(`   valid until: ${expiresAt.toLocaleString()}`);
  await pool.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
