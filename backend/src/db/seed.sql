-- =====================================================================
--  Seed data — a tiny working example so the engine runs end-to-end.
--  In production you bulk-import your ~400 endpoints here (or via the
--  import script) from the API docs we organized earlier.
-- =====================================================================

-- A demo connected shop (uses the mock platform so it runs with no real keys)
INSERT INTO platform_credentials (platform, shop_id, display_name, access_token, refresh_token, expires_at, status)
VALUES ('mock', 'demo-shop-001', 'Demo Shop', 'mock-access-token', 'mock-refresh-token', now() + interval '2 hours', 'active')
ON CONFLICT (platform, shop_id) DO NOTHING;

-- A POLLED endpoint: scheduler pulls the order list every 2 minutes, incrementally
INSERT INTO endpoints (platform, name, code, http_method, path, default_params, target_table, schedule_cron, incremental_key, enabled)
VALUES
('mock', 'order/list', 'mock.order_list', 'GET', '/order/list', '{"page_size":50}', 'orders', '*/2 * * * *', 'update_time', true)
ON CONFLICT (platform, code) DO NOTHING;

-- A CALLBACK-DRIVEN endpoint: only runs when an order event arrives
INSERT INTO endpoints (platform, name, code, http_method, path, default_params, target_table, schedule_cron, incremental_key, enabled)
VALUES
('mock', 'order/detail', 'mock.order_detail', 'GET', '/order/detail', '{}', 'orders', NULL, NULL, true)
ON CONFLICT (platform, code) DO NOTHING;

-- Route: when callback_type 'order_status_update' arrives -> fetch order detail,
-- mapping the order_id out of the callback body into the endpoint params.
INSERT INTO callback_routes (platform, callback_type, endpoint_code, param_mapping, enabled)
VALUES
('mock', 'order_status_update', 'mock.order_detail', '{"order_id":"data.order_id"}', true)
ON CONFLICT (platform, callback_type, endpoint_code) DO NOTHING;
