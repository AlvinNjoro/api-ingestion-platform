// Pull REAL Qianchuan order details for a shop and store them in the orders table.
//
//   npm run pull-orders -- <advertiser_id> [start_date] [end_date]
//   e.g. npm run pull-orders -- 1866609433950220 2026-05-07 2026-06-06
//
// Endpoint + parameters confirmed from the platform's own config response:
//   path:       /open_api/v1.0/qianchuan/report/long_transfer/order/data/get/
//   data_topic: LONG_TRANSFER_ORDER
//   dimensions/metrics/filters: from order/config/get
import { pool, query } from './db/index.js';

const HOST = 'https://api.oceanengine.com';
const PATH = '/open_api/v1.0/qianchuan/report/long_transfer/order/data/get/';

const DIMENSIONS = ['order_id', 'ad_id', 'order_create_time', 'is_pay', 'is_direct', 'order_flow_source'];
const METRICS = ['order_amount'];
// required filter: conversion window (1/3/7/15/30 days) — use 7-day
// required filters: conversion window (7-day) AND marketing goal (1=商品,2=直播间)
const FILTERS = [
  { field: 'attribute_time_type', operator: 7, values: ['7'] },
  { field: 'marketing_goal', operator: 7, values: ['1', '2'] },
];

function ymd(d: Date) { return d.toISOString().slice(0, 10); }

async function main() {
  const advertiserId = process.argv[2];
  if (!advertiserId) {
    console.error('Usage: npm run pull-orders -- <advertiser_id> [start_date] [end_date]');
    process.exit(1);
  }
  const startDate = process.argv[3] || ymd(new Date(Date.now() - 7 * 86400 * 1000));
  const endDate = process.argv[4] || ymd(new Date());

  const creds = await query<any>(
    `SELECT access_token FROM platform_credentials
      WHERE platform = 'qianchuan' AND status = 'active'
      ORDER BY updated_at DESC LIMIT 1`
  );
  const token = creds[0]?.access_token;
  if (!token) {
    console.error('No active qianchuan token. Run "npm run get-token" first.');
    await pool.end();
    process.exit(1);
  }

  const params = new URLSearchParams({
    advertiser_id: advertiserId,
    data_topic: 'LONG_TRANSFER_ORDER',
    dimensions: JSON.stringify(DIMENSIONS),
    metrics: JSON.stringify(METRICS),
    filters: JSON.stringify(FILTERS),
    start_time: `${startDate} 00:00:00`,
    end_time: `${endDate} 23:59:59`,
    page: '1',
    page_size: '100',
  });
  const url = `${HOST}${PATH}?${params.toString()}`;

  console.log(`Pulling order details for ${advertiserId}  (${startDate} -> ${endDate})...`);
  const res = await fetch(url, { headers: { 'Access-Token': token } });
  const json: any = await res.json();

  if (json.code !== 0) {
    console.error(`\nPlatform error (code ${json.code}): ${json.message}`);
    console.error('Full response:', JSON.stringify(json, null, 2));
    await pool.end();
    process.exit(1);
  }

  const data = json.data;
  const rows: any[] = data?.rows ?? data?.list ?? [];

  let stored = 0;
  for (const row of rows) {
    const flat = { ...(row.dimensions || {}), ...(row.metrics || {}), ...row };
    const orderId = String(flat.order_id ?? `${advertiserId}-${stored}`);
    const amount = flat.order_amount ?? null;
    const status = String(flat.is_pay ?? flat.is_direct ?? '');
    await query(
      `INSERT INTO orders (order_id, platform, shop_id, status, total_amount, buyer, raw, updated_at)
       VALUES ($1, 'qianchuan', $2, $3, $4, NULL, $5, now())
       ON CONFLICT (order_id) DO UPDATE
         SET status = EXCLUDED.status, total_amount = EXCLUDED.total_amount,
             raw = EXCLUDED.raw, updated_at = now()`,
      [orderId, advertiserId, status, amount, flat]
    );
    stored++;
  }

  console.log(`\n✅ Order details pulled. Orders stored: ${stored}`);
  if (data?.page_info) console.log('   page_info:', JSON.stringify(data.page_info));
  if (stored === 0) console.log('   (No orders in this window — try a wider date range.)');
  console.log('\nSample of the raw response:');
  console.log(JSON.stringify(json, null, 2).slice(0, 1500));
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });