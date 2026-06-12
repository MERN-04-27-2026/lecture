import { test, expect } from '@playwright/test';

/**
 * SMOKE TESTS - Basic tests that verify the app loads and displays content
 * These tests only check what ACTUALLY EXISTS in the app right now
 */

test.describe('Smoke Tests - Basic App Functionality', () => {
  test('home page loads and displays welcome message', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Welcome to E-Commerce Store');
    await expect(page.locator('text=Discover amazing products')).toBeVisible();
  });

  test('products page loads and displays title', async ({ page }) => {
    await page.goto('/products');
    await expect(page.locator('h1')).toContainText('Our Products');
    await expect(page.locator('text=Products page - add your products here')).toBeVisible();
  });

  test('login page loads', async ({ page }) => {
    await page.goto('/login');
    await expect(page.locator('h2')).toContainText('Login');
  });

  test('signup page loads', async ({ page }) => {
    await page.goto('/signup');
    await expect(page.locator('h2')).toContainText('Signup');
  });

  test('navigation between pages works', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Welcome');
    
    await page.goto('/products');
    await expect(page.locator('h1')).toContainText('Our Products');
    
    await page.goto('/login');
    await expect(page.locator('h2')).toContainText('Login');
  });

  test('browser back/forward navigation works', async ({ page }) => {
    await page.goto('/');
    await page.goto('/products');
    await page.goto('/login');
    
    await page.goBack();
    await expect(page.locator('h1')).toContainText('Our Products');
    
    await page.goBack();
    await expect(page.locator('h1')).toContainText('Welcome');
    
    await page.goForward();
    await expect(page.locator('h1')).toContainText('Our Products');
  });
});
