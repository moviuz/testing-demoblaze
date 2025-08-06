import { test, expect } from '@playwright/test';

test('Contact form', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Contact' }).click();


  await page.locator('#recipient-email').fill('fercho@fer.com');
  await page.locator('input[id="recipient-name"]').fill('Fernando');
  await page.locator('#message-text').fill('Example message for contact form');

  await page.locator('input[id="recipient-email"]').press('Tab');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Send message' }).click();
});