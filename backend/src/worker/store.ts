import { query } from '../db/index.js';

/** Persist records into their target table. Upserts so re-fetches are safe. */
export async function storeRecords(
  platform: string,
  endpointCode: string,
  shopId: string,
  targetTable: string,
  records: any[]
): Promise<number> {
  if (!records.length) return 0;

  if (targetTable === 'orders') {
    for (const r of records) {
      await query(
        `INSERT INTO orders (order_id, platform, shop_id, status, total_amount, buyer, raw, updated_at)
         VALUES ($1,$2,$3,$4,$5,$6,$7, now())
         ON CONFLICT (order_id) DO UPDATE
           SET status = EXCLUDED.status,
               total_amount = EXCLUDED.total_amount,
               raw = EXCLUDED.raw,
               updated_at = now()`,
        [r.order_id, platform, shopId, r.status, r.total_amount, r.buyer, r]
      );
    }
    return records.length;
  }

  // Generic JSONB landing table
  for (const r of records) {
    const recordKey =
      r.id ?? r.order_id ?? r.record_id ?? JSON.stringify(r).slice(0, 100);
    await query(
      `INSERT INTO ingested_data (platform, endpoint_code, shop_id, record_key, data)
       VALUES ($1,$2,$3,$4,$5)
       ON CONFLICT (endpoint_code, record_key) DO UPDATE
         SET data = EXCLUDED.data, fetched_at = now()`,
      [platform, endpointCode, shopId, String(recordKey), r]
    );
  }
  return records.length;
}
