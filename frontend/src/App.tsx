import { useEffect, useState, useCallback } from 'react';
import { api } from './lib/api';

function timeAgo(ts?: string) {
  if (!ts) return '—';
  const s = Math.floor((Date.now() - new Date(ts).getTime()) / 1000);
  if (s < 60) return `${s}s ago`;
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return new Date(ts).toLocaleDateString();
}

export default function App() {
  const [stats, setStats] = useState<any>(null);
  const [endpoints, setEndpoints] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [shops, setShops] = useState<any[]>([]);

  const refresh = useCallback(async () => {
    try {
      const [s, e, ev, o, sh] = await Promise.all([
        api.stats(), api.endpoints(), api.events(), api.orders(), api.shops(),
      ]);
      setStats(s); setEndpoints(e); setEvents(ev); setOrders(o); setShops(sh);
    } catch (err) { console.error(err); }
  }, []);

  useEffect(() => {
    refresh();
    const id = setInterval(refresh, 4000); // live polling
    return () => clearInterval(id);
  }, [refresh]);

  const onToggle = async (code: string) => { await api.toggle(code); refresh(); };
  const onRun = async (code: string) => { await api.run(code); setTimeout(refresh, 600); };

  return (
    <div className="wrap">
      <div className="top">
        <div className="brand">
          <div className="logo">⇄</div>
          <div>
            <h1>Ingestion Control</h1>
            <p>callback &amp; scheduled data pipeline</p>
          </div>
        </div>
        <div className="live"><span className="pulse" /> LIVE · auto-refresh 4s</div>
      </div>

      <div className="stats">
        <Stat label="Endpoints" value={stats?.endpoints?.n ?? '–'} sub={`${stats?.endpoints?.active ?? 0} active`} />
        <Stat label="Callbacks" value={stats?.events?.total ?? '–'} sub={`${stats?.events?.pending ?? 0} pending`} />
        <Stat label="Orders stored" value={stats?.orders ?? '–'} sub="normalized table" />
        <Stat label="Rows ingested" value={stats?.ingested ?? '–'} sub="JSONB landing" />
        <Stat label="Sync errors" value={stats?.errors ?? '–'} sub="last run" alert={stats?.errors > 0} />
      </div>

      <div className="grid">
        <section className="panel">
          <h2>Endpoint registry <span className="count">{endpoints.length}</span></h2>
          <table>
            <thead>
              <tr><th>Status</th><th>Code</th><th>Path</th><th>Trigger</th><th>Last run</th><th></th></tr>
            </thead>
            <tbody>
              {endpoints.map((e) => (
                <tr key={e.code}>
                  <td><span className={`dot ${e.last_status || 'idle'}`} />{e.last_status || 'idle'}</td>
                  <td className="code">{e.code}</td>
                  <td className="path">{e.http_method} {e.path}</td>
                  <td>{e.schedule_cron
                    ? <span className="tag poll">poll {e.schedule_cron}</span>
                    : <span className="tag cb">callback</span>}</td>
                  <td className="muted">{timeAgo(e.last_run_at)}{e.rows_last_run ? ` · ${e.rows_last_run} rows` : ''}</td>
                  <td>
                    <div className="row-actions">
                      <button className="btn" onClick={() => onRun(e.code)}>Run</button>
                      <button className={`btn ${e.enabled ? 'on' : 'off'}`} onClick={() => onToggle(e.code)}>
                        {e.enabled ? 'ON' : 'OFF'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {!endpoints.length && <tr><td colSpan={6} className="empty">No endpoints yet — import your 400 via npm run import.</td></tr>}
            </tbody>
          </table>
        </section>

        <div className="rail">
          <section className="panel">
            <h2>Inbound callbacks <span className="count">{events.length}</span></h2>
            <div className="feed">
              {events.map((ev) => (
                <div className="feed-row" key={ev.id}>
                  <span>
                    <span className={`dot ${ev.processed ? 'ok' : 'warn'}`} />
                    {ev.callback_type} <span className="muted">/{ev.platform}</span>
                  </span>
                  <span className="t">{timeAgo(ev.received_at)}</span>
                </div>
              ))}
              {!events.length && <div className="empty">Waiting for callbacks…</div>}
            </div>
          </section>

          <section className="panel">
            <h2>Connected shops <span className="count">{shops.length}</span></h2>
            <div>
              {shops.map((s) => (
                <div className="feed-row" key={s.platform + s.shop_id}>
                  <span><span className={`dot ${s.status === 'active' ? 'ok' : 'error'}`} />{s.display_name || s.shop_id} <span className="muted">/{s.platform}</span></span>
                  <span className="t">tok {timeAgo(s.expires_at)}</span>
                </div>
              ))}
              {!shops.length && <div className="empty">No shops connected.</div>}
            </div>
          </section>
        </div>
      </div>

      <section className="panel full">
        <h2>Recent orders <span className="count">{orders.length}</span></h2>
        <table>
          <thead>
            <tr><th>Order ID</th><th>Platform</th><th>Status</th><th>Amount</th><th>Buyer</th><th>Updated</th></tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.order_id}>
                <td className="code">{o.order_id}</td>
                <td className="muted">{o.platform}</td>
                <td>{o.status}</td>
                <td className="amount">{o.total_amount}</td>
                <td className="muted">{o.buyer}</td>
                <td className="muted">{timeAgo(o.updated_at)}</td>
              </tr>
            ))}
            {!orders.length && <tr><td colSpan={6} className="empty">No data ingested yet — trigger an endpoint or fire a callback.</td></tr>}
          </tbody>
        </table>
      </section>
    </div>
  );
}

function Stat({ label, value, sub, alert }: { label: string; value: any; sub: string; alert?: boolean }) {
  return (
    <div className={`stat${alert ? ' alert' : ''}`}>
      <div className="label">{label}</div>
      <div className="value">{value}</div>
      <div className="sub">{sub}</div>
    </div>
  );
}
