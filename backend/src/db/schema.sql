-- =====================================================================
--  API Ingestion Platform — PostgreSQL schema
--  The whole system is CONFIG-DRIVEN. Adding one of your 400+ endpoints
--  is an INSERT into `endpoints` (and maybe `callback_routes`), not code.
-- =====================================================================

-- --- Connected shops / accounts and their OAuth tokens --------------
CREATE TABLE IF NOT EXISTS platform_credentials (
    id              BIGSERIAL PRIMARY KEY,
    platform        TEXT NOT NULL,                 -- 'jinritemai' | 'oceanengine' | 'qianchuan'
    shop_id         TEXT NOT NULL,                 -- the merchant/advertiser id on that platform
    display_name    TEXT,
    access_token    TEXT,
    refresh_token   TEXT,
    expires_at      TIMESTAMPTZ,                   -- when access_token expires
    extra           JSONB NOT NULL DEFAULT '{}',   -- app_key, app_secret refs, scopes, etc.
    status          TEXT NOT NULL DEFAULT 'active',-- active | expired | revoked
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE (platform, shop_id)
);

-- --- The endpoint registry: your ~400 APIs live here as DATA --------
CREATE TABLE IF NOT EXISTS endpoints (
    id              BIGSERIAL PRIMARY KEY,
    platform        TEXT NOT NULL,
    name            TEXT NOT NULL,                 -- human label, e.g. "order/list"
    code            TEXT NOT NULL,                 -- unique slug, e.g. "jinritemai.order_list"
    http_method     TEXT NOT NULL DEFAULT 'GET',
    path            TEXT NOT NULL,                 -- e.g. "/order/searchList"
    default_params  JSONB NOT NULL DEFAULT '{}',
    target_table    TEXT NOT NULL DEFAULT 'ingested_data', -- where the result lands
    -- scheduling: NULL = pull-only-on-callback; otherwise polled on this cron
    schedule_cron   TEXT,                          -- e.g. '*/15 * * * *'
    incremental_key TEXT,                          -- field used as the cursor, e.g. 'update_time'
    enabled         BOOLEAN NOT NULL DEFAULT true,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE (platform, code)
);

-- --- Routing: when callback X arrives, run these endpoints ----------
CREATE TABLE IF NOT EXISTS callback_routes (
    id              BIGSERIAL PRIMARY KEY,
    platform        TEXT NOT NULL,
    callback_type   TEXT NOT NULL,                 -- the event tag the platform sends
    endpoint_code   TEXT NOT NULL,                 -- which endpoint to call in response
    -- map fields from the callback body into the endpoint's params:
    -- { "endpointParam": "callbackJsonPath" } e.g. { "order_id": "data.order_id" }
    param_mapping   JSONB NOT NULL DEFAULT '{}',
    enabled         BOOLEAN NOT NULL DEFAULT true,
    UNIQUE (platform, callback_type, endpoint_code)
);

-- --- Raw inbound webhook events (idempotency lives here) ------------
CREATE TABLE IF NOT EXISTS raw_events (
    id              BIGSERIAL PRIMARY KEY,
    platform        TEXT NOT NULL,
    callback_type   TEXT,
    idempotency_key TEXT NOT NULL,                 -- dedup: platforms re-deliver events
    payload         JSONB NOT NULL,
    received_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
    processed       BOOLEAN NOT NULL DEFAULT false,
    UNIQUE (platform, idempotency_key)
);

-- --- Per-endpoint+shop incremental sync cursor ---------------------
CREATE TABLE IF NOT EXISTS sync_state (
    id              BIGSERIAL PRIMARY KEY,
    endpoint_code   TEXT NOT NULL,
    shop_id         TEXT NOT NULL,
    cursor_value    TEXT,                          -- last seen value of incremental_key
    last_run_at     TIMESTAMPTZ,
    last_status     TEXT,                          -- ok | error
    last_error      TEXT,
    rows_last_run   INTEGER DEFAULT 0,
    UNIQUE (endpoint_code, shop_id)
);

-- --- Generic landing table for pulled data (JSONB) -----------------
-- Endpoints with a dedicated normalized table set target_table to it instead.
CREATE TABLE IF NOT EXISTS ingested_data (
    id              BIGSERIAL PRIMARY KEY,
    platform        TEXT NOT NULL,
    endpoint_code   TEXT NOT NULL,
    shop_id         TEXT,
    record_key      TEXT,                          -- natural id of the record if known
    data            JSONB NOT NULL,
    fetched_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE (endpoint_code, record_key)
);

-- --- Example NORMALIZED table (orders) -----------------------------
-- Shows the pattern for promoting a high-value resource out of JSONB.
CREATE TABLE IF NOT EXISTS orders (
    order_id        TEXT PRIMARY KEY,
    platform        TEXT NOT NULL,
    shop_id         TEXT,
    status          TEXT,
    total_amount    NUMERIC(14,2),
    buyer           TEXT,
    raw             JSONB NOT NULL,
    created_at      TIMESTAMPTZ,
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_ingested_endpoint ON ingested_data (endpoint_code);
CREATE INDEX IF NOT EXISTS idx_ingested_fetched  ON ingested_data (fetched_at DESC);
CREATE INDEX IF NOT EXISTS idx_raw_events_recv   ON raw_events (received_at DESC);
CREATE INDEX IF NOT EXISTS idx_orders_shop       ON orders (shop_id);
