import { query } from '../db/index.js';
import { getAdapter, type Credential } from '../platform/adapter.js';

const REFRESH_MARGIN_MS = 5 * 60 * 1000; // refresh if expiring within 5 min

/** Return a credential with a guaranteed-fresh access token. */
export async function getValidCredential(platform: string, shopId: string): Promise<Credential> {
  const rows = await query<Credential>(
    `SELECT platform, shop_id, access_token, refresh_token, expires_at, extra
       FROM platform_credentials
      WHERE platform = $1 AND shop_id = $2 AND status = 'active'`,
    [platform, shopId]
  );
  const cred = rows[0];
  if (!cred) throw new Error(`No active credential for ${platform}/${shopId}`);

  const expiringSoon =
    cred.expires_at && new Date(cred.expires_at).getTime() - Date.now() < REFRESH_MARGIN_MS;

  if (expiringSoon && cred.refresh_token) {
    const adapter = getAdapter(platform);
    const fresh = await adapter.refreshToken(cred);
    await query(
      `UPDATE platform_credentials
          SET access_token = $1, refresh_token = $2, expires_at = $3, updated_at = now()
        WHERE platform = $4 AND shop_id = $5`,
      [fresh.accessToken, fresh.refreshToken, fresh.expiresAt, platform, shopId]
    );
    cred.access_token = fresh.accessToken;
    cred.refresh_token = fresh.refreshToken;
    cred.expires_at = fresh.expiresAt.toISOString();
  }
  return cred;
}

/** Pick a shop for a platform (here: the first active one). */
export async function pickShop(platform: string): Promise<string | null> {
  const rows = await query<{ shop_id: string }>(
    `SELECT shop_id FROM platform_credentials
      WHERE platform = $1 AND status = 'active' ORDER BY id LIMIT 1`,
    [platform]
  );
  return rows[0]?.shop_id ?? null;
}
