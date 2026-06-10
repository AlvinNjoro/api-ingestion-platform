// DEPENDENT (chained) interface example — Douyin Shop order details.
//
// Pattern the customer described: the order DETAIL interface requires an
// order ID that can only come from the order LIST interface. So the chain is:
//
//   1. order.searchList  ->  stores orders (run: npm run dd-orders -- <shop_id>)
//   2. this script reads those stored order IDs
//   3. order.orderDetail is called per ID  ->  details stored
//
//   npm run dd-order-details -- <shop_id> [max_orders]
//
// The same chaining principle applies to every "list -> detail" pair
// (e.g. product list -> product detail, after-sale list -> after-sale detail).

import { pool, query } from './db/index.js';
import { ddRequest } from './jinritemai-client.js';

async function main() {
  const shopId = process.argv[2];
  const maxOrders = Number(process.argv[3] || 50);
  if (!shopId) {
    console.error('Usage: npm run dd-order-details -- <shop_id> [max_orders]');
    process.exit(1);
  }

  const creds = await query<any>(
    `SELECT access_token FROM platform_credentials
      WHERE platform = 'jinritemai' AND shop_id = $1 AND status = 'active'
      ORDER BY updated_at DESC LIMIT 1`,
    [shopId]
  );
  const token = creds[0]?.access_token;
  if (!token) {
    console.error(`No Douyin Shop token for shop ${shopId}. Run "npm run dd-token" first.`);
    await pool.end();
    process.exit(1);
  }

  // Step 1 of the chain: take order IDs from the stored order LIST results.
  const orders = await query<any>(
    `SELECT order_id FROM orders
      WHERE platform = 'jinritemai' AND shop_id = $1
      ORDER BY updated_at DESC LIMIT $2`,
    [shopId, maxOrders]
  );
  if (!orders.length) {
    console.error('No stored orders for this shop yet. Run "npm run dd-orders" first — the detail interface depends on IDs from the list interface.');
    await pool.end();
    process.exit(1);
  }
  console.log(`Found ${orders.length} stored order IDs. Querying details one by one...`);

  let okCount = 0;
  let failCount = 0;
  for (const o of orders) {
    // Step 2 of the chain: the detail interface's required parameter is the
    // order ID obtained from the list interface.
    const r = await ddRequest('order.orderDetail', '/order/orderDetail', { shop_order_id: String(o.order_id) }, token);
    if (!r.ok) {
      failCount++;
      console.error(`  ✗ ${o.order_id}: (code ${r.code}) ${r.msg}`);
      continue;
    }
    const detail = r.data?.shop_order_detail ?? r.data;
    await query(
      `INSERT INTO ingested_data (platform, endpoint_code, shop_id, record_key, data)
       VALUES ('jinritemai', 'jinritemai.order.orderDetail', $1, $2, $3)
       ON CONFLICT (endpoint_code, record_key) DO UPDATE
         SET data = EXCLUDED.data, fetched_at = now()`,
      [shopId, String(o.order_id), detail]
    );
    okCount++;
    console.log(`  ✓ ${o.order_id}: detail stored`);
  }

  console.log(`\n✅ Chained pull complete. Details stored: ${okCount}, failed: ${failCount}`);
  await pool.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
