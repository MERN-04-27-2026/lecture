import { test, expect } from '@playwright/test';

/**
 * Authentication E2E Tests
 * Demonstrates: Form pages, protected routes, redirects
 */

test.describe('Authentication', () => {
  test('should display login page - demonstrates form page testing', async ({ page }) => {
    await page.goto('/login');
    
    // Check page loaded
    await expect(page).toHaveURL('/login');
    
    // Check heading
    await expect(page.locator('h2')).toContainText('Login');
  });

  test('should display signup page - demonstrates similar page structure', async ({ page }) => {
    await page.goto('/signup');
    
    // Check page loaded
    await expect(page).toHaveURL('/signup');
    
    // Check heading
    await expect(page.locator('h2')).toContainText('Signup');
  });

  test('should redirect from protected routes - demonstrates auth guard', async () => {
    // TODO: Auth guard / protected route redirect not implemented yet
  });

  test('should allow access to public routes - demonstrates public pages', async ({ page }) => {
    // Public routes should be accessible
    await page.goto('/');
    await expect(page).toHaveURL('/');
    
    await page.goto('/products');
    await expect(page).toHaveURL('/products');
    
    await page.goto('/login');
    await expect(page).toHaveURL('/login');
  });
});
