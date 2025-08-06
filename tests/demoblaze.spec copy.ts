
import { test, expect } from '@playwright/test';

test('Product Purchase Flow', async ({ page }) => {
  
  
  await page.goto('https://demoblaze.com/');
  
  
  
  await page.getByRole('link', { name: 'Monitors' }).click();
  //await page.locator('xpath=////*[@id="itemc"][3]').click();
  await page.getByText('ASUS Full HD$230ASUS VS247H-P').click();
  await page.getByRole('heading', { name: 'ASUS Full HD' }).click();
  await page.getByText('ASUS VS247H-P 23.6- Inch Full').click();
  await page.getByRole('heading', { name: '$230 *includes tax' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.locator('#page-wrapper').click();
  await page.getByRole('cell', { name: 'ASUS Full HD' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByRole('textbox', { name: 'Total: 230 Name:' }).click();
  await page.getByRole('textbox', { name: 'Total: 230 Name:' }).fill('Fernando');
  await page.getByRole('textbox', { name: 'Country:' }).fill('Orozco');
  await page.getByRole('textbox', { name: 'City:' }).fill('M');
  await page.getByRole('textbox', { name: 'Country:' }).click();
  await page.getByRole('textbox', { name: 'Country:' }).fill('Mexico');
  await page.getByRole('textbox', { name: 'Country:' }).press('Tab');
  await page.getByRole('textbox', { name: 'City:' }).fill('Xalapa');
  await page.getByRole('textbox', { name: 'City:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Credit card:' }).fill('1234567897894561');
  await page.getByRole('textbox', { name: 'Credit card:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Month:' }).fill('01');
  await page.getByRole('textbox', { name: 'Year:' }).click();
  await page.getByRole('textbox', { name: 'Year:' }).fill('26');
  await page.locator('div').filter({ hasText: 'Total: 230 Name: Country:' }).nth(3).click();
  await page.getByRole('button', { name: 'Purchase' }).click();
  await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
  await page.getByRole('button', { name: 'OK' }).click();
});


