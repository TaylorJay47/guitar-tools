import { test, expect } from '@playwright/test';

test.describe('Home', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have title', async ({ page }) => {
    await expect(page).toHaveTitle('JayTools');
  });

  test('should have header', async ({ page }) => {
    await expect(page.getByText('Jay Tools ScalesChord Decoder')).toBeVisible();
    await expect(page.getByRole('list')).toContainText('Scales');
    await expect(page.getByRole('list')).toContainText('Chord Decoder');
  });

  test('should have welcome message', async ({page}) => {
    await expect(page.getByRole('heading')).toContainText('Welcome to Jay Tools!');
    await expect(page.locator('app-home')).toContainText('This application can be used');
  });

  test('should include links in welcome message', async ({page}) => {
    await expect(page.locator('app-home').getByRole('link', { name: 'Scales' })).toBeVisible();
    await expect(page.locator('app-home').getByRole('link', { name: 'Chord Decoder' })).toBeVisible();
  });
});

test.describe('Testing', () => {
});
