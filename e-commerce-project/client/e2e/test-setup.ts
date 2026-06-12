import { test, type Page } from '@playwright/test';

// Global test setup
test.beforeEach(async ({ page }: { page: Page }) => {
  // Mock console methods to reduce noise in test output
  await page.addInitScript(() => {
    // Override console.log to reduce noise in tests
    const originalLog = console.log;
    console.log = (...args) => {
      // Only log important messages
      if (typeof args[0] === 'string' && args[0].includes('successful')) {
        originalLog.apply(console, args);
      }
    };
  });

  // Set default viewport size
  await page.setViewportSize({ width: 1280, height: 720 });
  
  // Handle uncaught errors
  page.on('pageerror', (error: Error) => {
    console.error('Page error:', error);
  });
  
  // Handle console errors
  page.on('console', (msg: { type: () => string; text: () => string }) => {
    if (msg.type() === 'error') {
      console.error('Console error:', msg.text());
    }
  });
});
