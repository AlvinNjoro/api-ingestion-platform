import PgBoss from 'pg-boss';
import { config } from '../config/index.js';

export const FETCH_QUEUE = 'fetch-endpoint';

export interface FetchJob {
  platform: string;
  endpointCode: string;
  shopId: string;
  params: Record<string, any>;
  sourceEventId?: number; // raw_events.id if triggered by a callback
}

let boss: PgBoss | null = null;

export async function getBoss(): Promise<PgBoss> {
  if (boss) return boss;
  const b = new PgBoss({ connectionString: config.databaseUrl });
  await b.start();
  // pg-boss v10 requires a queue to exist before send/work/schedule.
  await ensureQueueOn(b, FETCH_QUEUE);
  boss = b;
  return boss;
}

// Create a queue if it doesn't already exist (safe to call repeatedly).
async function ensureQueueOn(b: PgBoss, name: string) {
  try {
    await b.createQueue(name);
  } catch {
    // queue already exists — fine
  }
}

export async function ensureQueue(name: string) {
  const b = await getBoss();
  await ensureQueueOn(b, name);
}

export async function enqueueFetch(job: FetchJob) {
  const b = await getBoss();
  await b.send(FETCH_QUEUE, job, {
    retryLimit: 5,
    retryBackoff: true,         // exponential backoff between retries
    expireInSeconds: 600,
  });
}