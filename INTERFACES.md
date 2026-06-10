# Interface coverage

The platforms expose a few hundred interfaces. They are handled **config-driven**:
each interface is a row in the `endpoints` table (data, not code). Adding or
loading interfaces is an import, never new code per endpoint.

## Counts (pulled from each platform's official documentation tree)

| System | Interfaces | Source |
|---|---|---|
| 巨量营销 (Ocean Marketing) | 429 | open.oceanengine.com doc tree (label 7) |
| 巨量千川 (Qianchuan) | 241 | open.oceanengine.com doc tree (label 12) |
| **Ocean Engine total** | **670** | `backend/endpoints.oceanengine.json` |
| 抖店 (Douyin Shop) | all, via generic caller | needs approved API qualification |

## Load all 670 Ocean Engine interfaces into the system

```bash
cd backend
npm run import -- ./endpoints.oceanengine.json
```

After this, the dashboard's "Endpoints" count reflects all 670, and every one is
listed in the Endpoint Registry.

## Call any interface (no per-endpoint code needed)

Ocean Engine (巨量营销 / 千川) — needs a stored token (`npm run get-token`):
```bash
npm run oe-call -- <advertiser_id> <path> '<json_params>' [GET|POST]
# e.g.
npm run oe-call -- 1866609433950220 /open_api/2/advertiser/info/ "{}" GET
```

Douyin Shop (抖店) — needs an approved qualification + token (`npm run dd-token`):
```bash
npm run dd-call -- <shop_id> <method> <path> '<json_params>'
# e.g.
npm run dd-call -- 123456 product.listV2 /product/listV2 "{\"page\":0,\"size\":20}"
```

So the deliverable is not "9 hand-written interfaces" — it is the full interface
registry (670 Ocean Engine interfaces loaded from the docs) plus generic callers
that reach every interface on both Ocean Engine and Douyin Shop.


## Every interface is developed as a function

`backend/src/generated/ocean-interfaces.ts` contains **670 functions — one per
documented Ocean Engine interface** (429 Ocean Marketing + 241 Qianchuan), each
wired to its exact path and HTTP method. Example:

```ts
import { advertiser_info, qianchuan_report_long_transfer_order_data_get } from './generated/ocean-interfaces.js';
const info = await advertiser_info(advertiserId, {}, token);
```

Note: each function targets the right endpoint; an endpoint's *specific required
business parameters* (e.g. the order report needs data_topic / filters) are passed
in `params` and come from that endpoint's doc. The orders interface
(`pull-orders`) is the fully worked example showing those parameters filled in.

## Douyin Shop (抖店) interfaces — now developed per-endpoint

`backend/src/generated/douyin-interfaces.ts` contains **154 functions — one per
read-only 抖店 interface** from the customer's checklist (API接口汇总.xlsx), each
wired to its exact 抖店 method via the signed client. Registry:
`backend/endpoints.douyin.json`. Example:

```ts
import { afterSale_List, product_listV2 } from './generated/douyin-interfaces.js';
const res = await product_listV2({ page: 0, size: 20 }, token);
```

## Coverage vs the customer checklist (API接口汇总.xlsx, 363 read-only interfaces)

| Platform | In checklist | Developed |
|---|---|---|
| 巨量千川 (Qianchuan) | 80 | 80 ✓ |
| 巨量营销 (Ocean Marketing) | 129 | 129 ✓ |
| 抖店 (Douyin Shop) | 154 | 154 ✓ |
| **Total** | **363** | **363 ✓** |

"Developed" = a dedicated function exists, wired to the correct path + method.
An endpoint's specific business parameters are passed in `params` (from that
endpoint's doc). Live data still requires credentials + an active shop, and for
抖店 an approved API qualification.

## Development rules from the customer (applied)

**1. Only read-type interfaces are developed.** The developed set is exactly the
read-only list from API接口汇总.xlsx (get/query/list/detail/report/OAuth). No
write interfaces (create/update/delete/pay/ship) have been implemented.

**2. Limited-read interfaces & dependent (chained) interfaces.** Some read
interfaces require specific request parameters, and some depend on values
returned by another interface. Two worked examples implement these patterns:

- Specific required params: Qianchuan long-period orders
  (`npm run pull-orders`) — requires data_topic / dimensions / metrics /
  filters / start_time, all filled in per the official doc.
- Dependent chain (list → detail): Douyin Shop order details
  (`npm run dd-order-details`) — order.orderDetail requires shop_order_id,
  which can only be obtained from order.searchList (`npm run dd-orders`).
  The script reads the stored list IDs and queries each detail.

The same two patterns apply to every similar pair (product list → product
detail, after-sale list → after-sale detail, etc.) using the generated
functions plus that interface's documented parameters.
