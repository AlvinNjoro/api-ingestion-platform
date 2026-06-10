import { getBoss, enqueueFetch, ensureQueue } from '../queue/index.js';
import { query } from '../db/index.js';
import { pickShop } from '../auth/tokenManager.js';

const SCHED_PREFIX = 'sched:';

// Load all endpoints that have a schedule_cron and register them with pg-boss.
// pg-boss fires them server-side; we react by enqueuing a normal fetch job.
export async function startScheduler() {
  const boss = await getBoss();

  const endpoints = await query<any>(
    `SELECT platform, code, schedule_cron FROM endpoints
      WHERE enabled = true AND schedule_cron IS NOT NULL`
  );

  for (const ep of endpoints) {
    const queueName = SCHED_PREFIX + ep.code;
    await ensureQueue(queueName); // must exist before work/schedule (pg-boss v10)
    // worker that turns a schedule tick into a fetch job for the current shop
    await boss.work(queueName, async () => {
      const shopId = await pickShop(ep.platform);
      if (!shopId) return;
      await enqueueFetch({ platform: ep.platform, endpointCode: ep.code, shopId, params: {} });
    });
    await boss.schedule(queueName, ep.schedule_cron);
    console.log(`[scheduler] ${ep.code} on "${ep.schedule_cron}"`);
  }
  console.log(`[scheduler] ${endpoints.length} polled endpoint(s) registered`);
}