import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on',
    video: 'on',
    screenshot: 'only-on-failure',
  },
  // HTML-ОТЧЕТ
  reporter: [['list'], ['html', { open: 'never' }]], 
  webServer: {
    command: 'npx vite',
    url: 'http://localhost:5173',
    reuseExistingServer: true,
  },
});