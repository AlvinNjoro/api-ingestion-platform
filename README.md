# API Ingestion Platform

A config-driven middleware that sits between a platform (Douyin Store / Ocean
Engine / Qianchuan) and your database. Data arrives two ways:

1. **Callback (push)** — the platform fires a webhook → the engine looks up which
   API(s) to call in response → fetches the data → stores it.
2. **Schedule (pull)** — endpoints with a cron run on a timer, pulling new data
   incrementally (only what changed since last run).

Either way, the result lands in PostgreSQL automatically. A React dashboard lets
you watch and control everything.

## Why "config-driven"

Your ~400 endpoints are **data, not code**. Each lives as a row in the `endpoints`
table. Adding one is an INSERT (or a line in an import file) — never a code change.
That's what makes 400+ endpoints manageable.

## Architecture

```
            ┌─────────────┐   POST /webhook/:platform
 platform ──┤  Webhook    │── verify sig → dedupe → ACK fast ──┐
   push     │  receiver   │                                     │
            └─────────────┘                                     ▼
                                                        ┌──────────────┐
            ┌─────────────┐   cron tick                 │   job queue  │
 schedule ──┤  Scheduler  │── enqueue fetch job ───────▶│  (pg-boss)   │
            └─────────────┘                             └──────┬───────┘
                                                               │ retries+backoff
                                                        ┌──────▼───────┐
                                                        │   Worker     │
                                                        │  adapter.fetch│→ token mgr
                                                        │  store records│→ PostgreSQL
                                                        └──────┬───────┘
            ┌─────────────┐   /api/*                           │
 dashboard ─┤  REST API   │◀──────────────────────────────────┘
            └─────────────┘
```

Components (all in `backend/src/`): `webhook/` receiver · `queue/` pg-boss ·
`worker/` fetch+store · `scheduler/` cron · `auth/` token auto-refresh ·
`platform/` per-platform adapters · `api/` dashboard REST · `db/` schema+seed.

## Run it (Docker)

```bash
docker compose up --build
# backend webhook  -> http://localhost:4000
# dashboard API    -> http://localhost:4001
```

Then run the frontend:

```bash
cd frontend && npm install && npm run dev   # http://localhost:5173
```

## Run it (without Docker)

```bash
# 1. a local Postgres, then:
cd backend && cp .env.example .env && npm install && npm run dev
cd frontend && npm install && npm run dev
```

It ships with a **mock platform** and seed data, so it runs end-to-end with no
real credentials. Watch the pipeline by firing a fake callback:

```bash
cd backend && npm run simulate     # sends an order_status_update callback
```

The dashboard will show the callback arrive, the worker fetch the order, and the
order appear in the Recent Orders table. The scheduled `order/list` endpoint also
pulls every 2 minutes automatically.

## Adding your 400 endpoints

Put them in a JSON file (see `backend/endpoints.sample.json`) and import:

```bash
cd backend && npm run import -- ./endpoints.json
```

Each endpoint: `{ platform, name, code, http_method, path, default_params,
target_table, schedule_cron, incremental_key }`. Set `schedule_cron` for polled
endpoints; leave it null for callback-only ones and add a row to `callback_routes`
mapping the event to the endpoint.

## Wiring a real platform

`platform/mock.ts` and `platform/jinritemai.ts` show the adapter pattern. To go
live for a platform, fill in its `fetch` (request signing + response shape),
`verifySignature`, `parseCallback`, and `refreshToken` from the API docs, then
register it in `src/index.ts`. The engine, queue, scheduler, dashboard, and
storage stay unchanged.

## What's done vs. what's next

Done: full engine (webhook → queue → worker → store), incremental sync, token
auto-refresh, idempotency/dedup, retries with backoff, scheduler, dashboard,
config-driven registry, Docker. Next: real signing logic per platform, OAuth
connect flow for shops, the bulk endpoint JSON generated from the docs, and any
normalized tables beyond `orders`.


## Interface coverage
The full interface set (670 Ocean Engine interfaces + the Douyin Shop generic caller) is documented in INTERFACES.md. Load them with `npm run import -- ./endpoints.oceanengine.json`.
