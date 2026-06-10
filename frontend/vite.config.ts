import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // proxy dashboard API calls to the backend during dev
    proxy: { '/api': 'http://localhost:4001' },
  },
});
