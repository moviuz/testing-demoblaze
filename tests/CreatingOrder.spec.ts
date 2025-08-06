
import { test, expect } from '@playwright/test';

test('Product Purchase Flow', async ({ page }) => {
  //go homepage 
  await page.goto('https://demoblaze.com/');

  //select a category and product
  await page.getByRole('link', { name: 'Monitors' }).click();

  //select product cant improve with locator
  await page.getByText('ASUS Full HD$230ASUS VS247H-P').click();
  await page.getByRole('heading', { name: 'ASUS Full HD' }).click();
  await page.getByRole('heading', { name: '$230 *includes tax' }).click();

  //add to cart and handle dialog 
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  //navigate on nav bar to cart
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.locator('#page-wrapper').click();

  //select product in cart and proceed to order
  await page.getByRole('cell', { name: 'ASUS Full HD' }).click();

  //click place order button
  await page.getByRole('button', { name: 'Place Order' }).click();

  //fill the oder information
  await page.getByRole('textbox', { name: 'Total: 230 Name:' }).click();
  await page.getByRole('textbox', { name: 'Total: 230 Name:' }).fill('Fernando');
  
  //change the fill form by id's 
  await page.locator('input[id="name"]').fill('Fernando');
  await page.locator('input[id="country"]').fill('Mexico');
  await page.locator('input[id="city"]').fill('Xalapa');
  await page.locator('input[id="card"]').fill('1234567897894561');
  await page.locator('input[id="month"]').fill('01');
  await page.locator('input[id="year"]').fill('26');


  await page.getByRole('button', { name: 'Purchase' }).click();
  await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
  await page.getByRole('button', { name: 'OK' }).click();
});





