import { Pool } from 'pg';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { config } from '../config/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const pool = new Pool({ connectionString: config.databaseUrl });

export async function query<T = any>(text: string, params?: any[]) {
  const res = await pool.query(text, params);
  return res.rows as T[];
}

/** Wait until the DB accepts connections (handles Postgres first-boot races). */
async function waitForDb(retries = 30, delayMs = 2000) {
  for (let i = 1; i <= retries; i++) {
    try {
      await pool.query('SELECT 1');
      return;
    } catch {
      console.log(`[db] waiting for database to be ready... (${i}/${retries})`);
      await new Promise((r) => setTimeout(r, delayMs));
    }
  }
  throw new Error('Database did not become ready in time');
}

/** Apply schema.sql, then seed.sql. Safe to run repeatedly (idempotent). */
export async function migrate() {
  await waitForDb();
  const schema = readFileSync(join(__dirname, 'schema.sql'), 'utf8');
  const seed = readFileSync(join(__dirname, 'seed.sql'), 'utf8');
  await pool.query(schema);
  await pool.query(seed);
  console.log('[db] schema applied and seeded');
}