const {test,expect, chromium} = require('@playwright/test');

test('Handle Multiple Windows', async()=>
{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle("OrangeHRM");
    console.log(await page1.title());

    

    let pagePromise = await context.waitForEvent("page");
    await page1.locator("a[href='http://www.orangehrm.com']").click();

    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    await expect(newPage).toHaveTitle("OrangeHRM: All in One HR Software for Businesses | OrangeHRM");
    console.log(await newPage.title());

   

    await page1.pause();
        
})