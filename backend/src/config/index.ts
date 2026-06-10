import 'dotenv/config';

export const config = {
  databaseUrl:
    process.env.DATABASE_URL ||
    'postgres://postgres:postgres@localhost:5432/ingestion',
  webhookPort: Number(process.env.WEBHOOK_PORT || 4000),
  apiPort: Number(process.env.API_PORT || 4001),
  // Comma-separated secrets used to verify inbound webhook signatures, per platform.
  webhookSecrets: {
    mock: process.env.WEBHOOK_SECRET_MOCK || 'dev-secret',
    jinritemai: process.env.WEBHOOK_SECRET_JINRITEMAI || '',
    oceanengine: process.env.WEBHOOK_SECRET_OCEANENGINE || '',
  } as Record<string, string>,
};
