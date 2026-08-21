
const {test,expect} = require('@playwright/test');

test("WebElements",async({page})=>{

   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
   await page.locator("[for='radio2'] input").click();
   await expect(page.locator("[for='radio2'] input")).toBeChecked();
   await page.locator("#dropdown-class-example").selectOption("option2");
   await page.locator("#checkBoxOption2").check();
   await expect(page.locator("#checkBoxOption2")).toBeChecked();
   await page.getByPlaceholder("Enter Your Name").fill('xyz');
   await page.locator("#alertbtn").click();
   await page.on('dialog',dialog=>dialog.accept());
   await expect( page.locator("#displayed-text")).toBeVisible();
   await page.locator("#hide-textbox").click();
   await expect( page.locator("#displayed-text")).toBeHidden();
   await page.locator("#mousehover").hover();
   const framesPage = page.frameLocator("#courses-iframe");
   await framesPage.locator("li a[href*='courses']:visible").click();
   const name = await framesPage.locator(".BrowseProductsTitle").textContent();
   console.log(name);

})