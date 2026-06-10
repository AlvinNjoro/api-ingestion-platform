// Pretend the platform fired an order callback, to watch the pipeline run.
//   npm run simulate
import crypto from 'node:crypto';

const PORT = process.env.WEBHOOK_PORT || 4000;
const body = {
  event_id: crypto.randomUUID(),
  type: 'order_status_update',
  data: { order_id: 'cb-' + Date.now(), status: 'PAID' },
};
const raw = JSON.stringify(body);
const sig = crypto.createHmac('sha256', process.env.WEBHOOK_SECRET_MOCK || 'dev-secret').update(raw).digest('hex');

const res = await fetch(`http://localhost:${PORT}/webhook/mock`, {
  method: 'POST',
  headers: { 'content-type': 'application/json', 'x-signature': sig },
  body: raw,
});
console.log('Callback sent ->', res.status, await res.json());
