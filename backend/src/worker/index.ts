import { getBoss, FETCH_QUEUE, type FetchJob } from '../queue/index.js';
import { query } from '../db/index.js';
import { getAdapter, type EndpointConfig } from '../platform/adapter.js';
import { getValidCredential } from '../auth/tokenManager.js';
import { storeRecords } from './store.js';

async function loadEndpoint(platform: string, code: string): Promise<EndpointConfig & { target_table: string }> {
  const rows = await query<any>(
    `SELECT platform, code, http_method, path, default_params, target_table, incremental_key
       FROM endpoints WHERE platform = $1 AND code = $2 AND enabled = true`,
    [platform, code]
  );
  if (!rows[0]) throw new Error(`Endpoint not found or disabled: ${platform}/${code}`);
  return rows[0];
}

async function getCursor(code: string, shopId: string): Promise<string | null> {
  const rows = await query<{ cursor_value: string }>(
    `SELECT cursor_value FROM sync_state WHERE endpoint_code = $1 AND shop_id = $2`,
    [code, shopId]
  );
  return rows[0]?.cursor_value ?? null;
}

async function saveSyncState(
  code: string, shopId: string, cursor: string | null, status: string, rows: number, error?: string
) {
  await query(
    `INSERT INTO sync_state (endpoint_code, shop_id, cursor_value, last_run_at, last_status, last_error, rows_last_run)
     VALUES ($1,$2,$3, now(), $4, $5, $6)
     ON CONFLICT (endpoint_code, shop_id) DO UPDATE
       SET cursor_value = COALESCE(EXCLUDED.cursor_value, sync_state.cursor_value),
           last_run_at = now(), last_status = EXCLUDED.last_status,
           last_error = EXCLUDED.last_error, rows_last_run = EXCLUDED.rows_last_run`,
    [code, shopId, cursor, status, error ?? null, rows]
  );
}

async function handleJob(job: FetchJob) {
  const { platform, endpointCode, shopId, params, sourceEventId } = job;
  const endpoint = await loadEndpoint(platform, endpointCode);
  const cred = await getValidCredential(platform, shopId);
  const adapter = getAdapter(platform);
  const cursor = await getCursor(endpointCode, shopId);

  try {
    const result = await adapter.fetch(endpoint, cred, params, cursor);
    const stored = await storeRecords(platform, endpointCode, shopId, endpoint.target_table, result.records);
    await saveSyncState(endpointCode, shopId, result.nextCursor ?? cursor, 'ok', stored);
    if (sourceEventId) {
      await query(`UPDATE raw_events SET processed = true WHERE id = $1`, [sourceEventId]);
    }
    console.log(`[worker] ${endpointCode} (${shopId}) -> stored ${stored} record(s)`);
  } catch (err: any) {
    await saveSyncState(endpointCode, shopId, cursor, 'error', 0, err.message);
    throw err; // let pg-boss retry with backoff
  }
}

export async function startWorker() {
  const boss = await getBoss();
  await boss.work<FetchJob>(FETCH_QUEUE, async ([job]) => handleJob(job.data));
  console.log('[worker] listening for fetch jobs');
}
