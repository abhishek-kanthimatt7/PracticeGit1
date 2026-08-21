
const {test, expect} = require('@playwright/test');

test("Browser Context",async({browser})=>
{
   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
   console.log(await page.title());
   await expect(page).toHaveTitle("Let's Shop");

   await page.locator("#userEmail").fill("John1duran@yahoo.com");
   await page.locator("[type='password']").fill("John1Duran");
   await page.locator("#login").click();
   const title = await page.locator(".card-body b").first().textContent();
   console.log(title);
   expect(page.locator(".card-body b").first()).toContainText("ADIDAS");


});