// Bulk-load your ~400 endpoints from a JSON file into the registry.
//
//   npm run import -- ./endpoints.json
//
// Each item: { platform, name, code, http_method, path, default_params?,
//              target_table?, schedule_cron?, incremental_key? }
// You can generate this JSON directly from the API docs we organized earlier.

import { readFileSync } from 'node:fs';
import { pool, query } from './db/index.js';

interface Row {
  platform: string;
  name: string;
  code: string;
  http_method?: string;
  path: string;
  default_params?: Record<string, any>;
  target_table?: string;
  schedule_cron?: string | null;
  incremental_key?: string | null;
}

async function main() {
  const file = process.argv[2];
  if (!file) {
    console.error('Usage: npm run import -- <path-to-endpoints.json>');
    process.exit(1);
  }
  const rows: Row[] = JSON.parse(readFileSync(file, 'utf8'));
  let n = 0;
  for (const r of rows) {
    await query(
      `INSERT INTO endpoints
         (platform, name, code, http_method, path, default_params, target_table, schedule_cron, incremental_key)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
       ON CONFLICT (platform, code) DO UPDATE
         SET name = EXCLUDED.name, path = EXCLUDED.path,
             default_params = EXCLUDED.default_params,
             target_table = EXCLUDED.target_table,
             schedule_cron = EXCLUDED.schedule_cron,
             incremental_key = EXCLUDED.incremental_key`,
      [
        r.platform, r.name, r.code, r.http_method ?? 'GET', r.path,
        r.default_params ?? {}, r.target_table ?? 'ingested_data',
        r.schedule_cron ?? null, r.incremental_key ?? null,
      ]
    );
    n++;
  }
  console.log(`Imported/updated ${n} endpoints.`);
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
