import { test, expect } from '@playwright/test';

/**
 * Navigation E2E Tests
 * Demonstrates: Page navigation, URL assertions, browser history, 
 * route parameters, redirects
 */

test.describe('Navigation', () => {
  test('should navigate between pages - demonstrates basic routing', async ({ page }) => {
    // Start at home
    await page.goto('/');
    await expect(page).toHaveURL('/');
    await expect(page.locator('h1')).toContainText('Welcome');
    
    // Navigate to products
    await page.goto('/products');
    await expect(page).toHaveURL('/products');
    await expect(page.locator('h1')).toContainText('Our Products');
    
    // Navigate to login
    await page.goto('/login');
    await expect(page).toHaveURL('/login');
    await expect(page.locator('h2')).toContainText('Login');
  });

  test('should use browser back/forward - demonstrates browser history', async ({ page }) => {
    // Navigate through pages
    await page.goto('/');
    await page.goto('/products');
    await page.goto('/login');

    // Use browser back button
    await page.goBack();
    await expect(page).toHaveURL('/products');

    // Use browser back again
    await page.goBack();
    await expect(page).toHaveURL('/');

    // Use browser forward button
    await page.goForward();
    await expect(page).toHaveURL('/products');
  });

  test('should handle dynamic routes - demonstrates route parameters', async ({ page }) => {
    // Navigate to a product detail page with ID parameter
    await page.goto('/products/1');
    
    // Should load the product detail page
    await expect(page).toHaveURL('/products/1');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
  });

  test('should handle query parameters - demonstrates URL parameter testing', async ({ page }) => {
    // Navigate with query parameters
    await page.goto('/products?category=beauty&minRating=4');
    
    // Verify URL contains parameters
    await expect(page).toHaveURL(/category=beauty/);
    await expect(page).toHaveURL(/minRating=4/);
    
    // Page should still load
    await expect(page.locator('h1')).toContainText('Our Products');
  });

  test('should handle page reload - demonstrates state persistence', async ({ page }) => {
    // Navigate to products
    await page.goto('/products');
    await expect(page).toHaveURL('/products');

    // Reload the page
    await page.reload();
    
    // Should still be on products page after reload
    await expect(page).toHaveURL('/products');
    await expect(page.locator('h1')).toContainText('Our Products');
  });

  test('should handle protected routes - demonstrates redirects', async () => {
    // TODO: Auth guard / protected route redirect not implemented yet
  });
});
