import { test, expect } from '@playwright/test';

/**
 * Products Page E2E Tests
 * Demonstrates: Waiting for dynamic content, counting elements, CSS selectors, 
 * first/nth selectors, API-dependent testing
 */

test.describe('Products Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/products');
  });

  test('should display page title - demonstrates basic page load', async ({ page }) => {
    // Check h1 heading
    await expect(page.locator('h1')).toContainText('Our Products');
    
    // Check subtitle text
    await expect(page.locator('text=Products page - add your products here')).toBeVisible();
  });

  test('should load products from API - demonstrates waiting for dynamic content', async () => {
    // TODO: Product fetching/display not implemented yet
  });

  test('should display product card elements - demonstrates element inspection', async () => {
    // TODO: Product cards not implemented yet
  });

  test('should navigate to product detail when clicking View Details', async () => {
    // TODO: View Details button onClick handler not implemented yet
  });

  test('should display product images - demonstrates image loading verification', async () => {
    // TODO: Product images not implemented yet
  });

  test('should handle URL query parameters - demonstrates URL testing', async ({ page }) => {
    // Navigate with query parameters
    await page.goto('/products?category=beauty&minRating=4');
    
    // Verify URL contains the parameters
    await expect(page).toHaveURL(/category=beauty/);
    await expect(page).toHaveURL(/minRating=4/);
    
    // Page should still load normally
    await expect(page.locator('h1')).toContainText('Our Products');
  });

  test('should display multiple products - demonstrates counting and iteration', async () => {
    // TODO: Product grid not implemented yet
  });

  test('should be responsive - demonstrates viewport and element size testing', async ({ page }) => {
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/products');
    
    await expect(page.locator('h1')).toBeVisible();
    
    // Test desktop view
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.goto('/products');
    
    await expect(page.locator('h1')).toBeVisible();
  });
});
