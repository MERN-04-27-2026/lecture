import { test as base, expect, type Page, type Route } from '@playwright/test';

// Define custom fixture types
interface AuthFixtures {
  authenticatedPage: Page;
  mockUser: {
    id: number;
    email: string;
    name: string;
  };
}

// Extend base test with custom fixtures
export const test = base.extend<AuthFixtures>({
  mockUser: {
    id: 1,
    email: 'test@example.com',
    name: 'Test User'
  },

  authenticatedPage: async ({ page, mockUser }: { page: Page; mockUser: AuthFixtures['mockUser'] }, use: (page: Page) => Promise<void>) => {
    // Set up authentication state
    await page.addInitScript(() => {
      window.localStorage.setItem('authToken', 'mock-jwt-token');
      window.localStorage.setItem('user', JSON.stringify({
        id: 1,
        email: 'test@example.com',
        name: 'Test User'
      }));
    });

    // Mock authentication API endpoints
    await page.route('**/auth/login', (route: Route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          success: true,
          user: mockUser,
          token: 'mock-jwt-token'
        })
      });
    });

    await page.route('**/auth/signup', (route: Route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          success: true,
          user: mockUser,
          token: 'mock-jwt-token'
        })
      });
    });

    await page.route('**/auth/me', (route: Route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          success: true,
          user: mockUser
        })
      });
    });

    await use(page); // eslint-disable-line react-hooks/rules-of-hooks
  }
});

export { expect };
