const base = '';

async function get<T>(path: string): Promise<T> {
  const r = await fetch(base + path);
  if (!r.ok) throw new Error(`${path} -> ${r.status}`);
  return r.json();
}
async function post<T>(path: string, body?: any): Promise<T> {
  const r = await fetch(base + path, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!r.ok) throw new Error(`${path} -> ${r.status}`);
  return r.json();
}

export const api = {
  stats: () => get<any>('/api/stats'),
  endpoints: () => get<any[]>('/api/endpoints'),
  events: () => get<any[]>('/api/events'),
  orders: () => get<any[]>('/api/orders'),
  shops: () => get<any[]>('/api/shops'),
  toggle: (code: string) => post(`/api/endpoints/${code}/toggle`),
  run: (code: string) => post(`/api/endpoints/${code}/run`),
};
