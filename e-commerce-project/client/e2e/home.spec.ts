import { test, expect } from '@playwright/test';

/**
 * Home Page E2E Tests
 * Demonstrates: Basic selectors, text assertions, visibility checks, responsive testing
 */

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to home page before each test
    await page.goto('/');
  });

  test('should display welcome message - demonstrates text selectors and assertions', async ({ page }) => {
    // Using h1 tag selector
    const heading = page.locator('h1');
    await expect(heading).toContainText('Welcome to E-Commerce Store');
    
    // Using text selector
    const description = page.locator('text=Discover amazing products across all categories');
    await expect(description).toBeVisible();
  });

  test('should display recommended products section - demonstrates waiting for elements', async ({ page }) => {
    // Wait for section heading to appear
    const recommendedSection = page.locator('text=✨ Recommended for You');
    await expect(recommendedSection).toBeVisible();
    
    // Verify it's an h2 element
    const sectionHeading = page.locator('h2:has-text("Recommended for You")');
    await expect(sectionHeading).toBeVisible();
  });

  test('should have proper page structure - demonstrates multiple element checks', async ({ page }) => {
    // Check for main heading
    await expect(page.locator('h1')).toBeVisible();
    
    // Verify page has loaded by checking URL
    await expect(page).toHaveURL('/');
  });

  test('should be responsive - demonstrates viewport testing', async ({ page }) => {
    // Test mobile view (375x667 - iPhone SE)
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h1')).toContainText('Welcome');

    // Test tablet view (768x1024 - iPad)
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('h1')).toBeVisible();

    // Test desktop view (1200x800)
    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(page.locator('h1')).toBeVisible();
  });
});
