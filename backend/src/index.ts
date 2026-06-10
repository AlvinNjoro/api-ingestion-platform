import { config } from './config/index.js';
import { migrate } from './db/index.js';
import { registerAdapter } from './platform/adapter.js';
import { mockAdapter } from './platform/mock.js';
import { jinritemaiAdapter } from './platform/jinritemai.js';
import { createWebhookServer } from './webhook/server.js';
import { createApiServer } from './api/server.js';
import { startWorker } from './worker/index.js';
import { startScheduler } from './scheduler/index.js';

async function main() {
  await migrate();

  // Register every platform adapter the system knows about
  registerAdapter(mockAdapter);
  registerAdapter(jinritemaiAdapter);

  createWebhookServer().listen(config.webhookPort, () =>
    console.log(`[webhook] listening on :${config.webhookPort}  (POST /webhook/:platform)`)
  );
  createApiServer().listen(config.apiPort, () =>
    console.log(`[api] dashboard API on :${config.apiPort}`)
  );

  await startWorker();
  await startScheduler();

  console.log('\nAPI Ingestion Platform is running.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
