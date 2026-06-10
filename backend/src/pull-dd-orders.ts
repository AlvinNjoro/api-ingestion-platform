// Pull Douyin Shop (抖店) orders via order.searchList and store them.
//
//   npm run dd-orders -- <shop_id> [start_time] [end_time]
//   e.g. npm run dd-orders -- 123456 "2026-05-01 00:00:00" "2026-06-06 23:59:59"
//
// Stores into the orders table (platform = 'jinritemai'), with paging.
// Ready to run once a Douyin Shop token exists (see dd-get-token).

import { pool, query } from './db/index.js';
import { ddRequest } from './jinritemai-client.js';

async function main() {
  const shopId = process.argv[2];
  if (!shopId) {
    console.error('Usage: npm run dd-orders -- <shop_id> [start_time] [end_time]');
    process.exit(1);
  }
  const fmt = (d: Date) => d.toISOString().slice(0, 19).replace('T', ' ');
  const startTime = process.argv[3] || fmt(new Date(Date.now() - 7 * 86400 * 1000));
  const endTime = process.argv[4] || fmt(new Date());

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

  let page = 0;
  const size = 100;
  let total = 0;
  let stored = 0;

  do {
    const params = {
      order_by: 'create_time',
      order_asc: false,
      size,
      page,
      create_time_start: startTime,
      create_time_end: endTime,
    };
    const r = await ddRequest('order.searchList', '/order/searchList', params, token);
    if (!r.ok) {
      console.error(`\nPlatform error (code ${r.code}): ${r.msg}`);
      console.error('Full response:', JSON.stringify(r.raw, null, 2));
      await pool.end();
      process.exit(1);
    }

    const list: any[] = r.data?.shop_order_list ?? r.data?.order_list ?? r.data?.list ?? [];
    total = r.data?.total ?? total;
    for (const o of list) {
      const orderId = String(o.order_id ?? o.shop_order_id ?? `${shopId}-${stored}`);
      const amount = o.pay_amount ?? o.order_amount ?? null;
      const status = String(o.order_status ?? o.main_status ?? '');
      await query(
        `INSERT INTO orders (order_id, platform, shop_id, status, total_amount, buyer, raw, updated_at)
         VALUES ($1, 'jinritemai', $2, $3, $4, NULL, $5, now())
         ON CONFLICT (order_id) DO UPDATE
           SET status = EXCLUDED.status, total_amount = EXCLUDED.total_amount,
               raw = EXCLUDED.raw, updated_at = now()`,
        [orderId, shopId, status, amount, o]
      );
      stored++;
    }
    if (!list.length) break;
    page++;
  } while (stored < total && page < 100);

  console.log(`\n✅ Douyin Shop orders pulled. Stored: ${stored} (reported total: ${total})`);
  await pool.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
