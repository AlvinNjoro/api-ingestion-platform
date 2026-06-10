// A PlatformAdapter knows how to: build a request for an endpoint, sign it,
// verify inbound webhooks, and refresh tokens. Add one file per real platform
// (jinritemai, oceanengine, ...) implementing this interface and register it.

export interface EndpointConfig {
  platform: string;
  code: string;
  http_method: string;
  path: string;
  default_params: Record<string, any>;
  incremental_key: string | null;
}

export interface Credential {
  platform: string;
  shop_id: string;
  access_token: string | null;
  refresh_token: string | null;
  expires_at: string | null;
  extra: Record<string, any>;
}

export interface FetchResult {
  records: any[];          // the list of records pulled
  nextCursor?: string;     // value to store for incremental sync
  rawResponse: any;
}

export interface PlatformAdapter {
  platform: string;
  /** Call one endpoint and normalize the response into records. */
  fetch(
    endpoint: EndpointConfig,
    cred: Credential,
    params: Record<string, any>,
    cursor: string | null
  ): Promise<FetchResult>;
  /** Verify an inbound webhook signature. Return false to reject. */
  verifySignature(headers: Record<string, string>, rawBody: string, secret: string): boolean;
  /** Extract a stable idempotency key + the callback type from the body. */
  parseCallback(body: any): { idempotencyKey: string; callbackType: string };
  /** Exchange a refresh token for a fresh access token. */
  refreshToken(cred: Credential): Promise<{ accessToken: string; refreshToken: string; expiresAt: Date }>;
}

const registry = new Map<string, PlatformAdapter>();
export function registerAdapter(a: PlatformAdapter) {
  registry.set(a.platform, a);
}
export function getAdapter(platform: string): PlatformAdapter {
  const a = registry.get(platform);
  if (!a) throw new Error(`No adapter registered for platform "${platform}"`);
  return a;
}
