import { test, expect } from '@playwright/test';

test.describe('ClubSeoApp', () => {
  test('should display home page', async ({ page }) => {
    await page.goto('/');
    // Check if body or some part of the page contains Tab 1 or similar text,
    // or just check that we loaded successfully by asserting we have some text/elements.
    await expect(page).toHaveTitle(/.*Club Deportivo SEO.*/i);
  });
});
