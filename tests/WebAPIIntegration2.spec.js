
const {test,expect} = require('@playwright/test');

let ctxt;
test.beforeAll("API Storage",async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://eventhub.rahulshettyacademy.com/login");
    await page.getByPlaceholder("you@email.com").fill("CarlJohnson_7@yahoo.com");
    await page.getByRole('textbox',{name:"Password"}).fill("CarlJohnson_7");
    await page.getByRole("button",{name:"Sign In"}).click();
    await page.locator("#event-card").first().waitFor();
    await context.storageState({path:"State.json"});
    ctxt = await browser.newContext({storageState:"State.json"});

})

test("Printing Events List",async()=>{

    const p1 = await ctxt.newPage();
    await p1.goto("https://eventhub.rahulshettyacademy.com/");
    await p1.locator("#event-card").first().waitFor();
    const titles = await p1.locator("h3.font-semibold").allTextContents();
    console.log(titles);
});


test("Browsing events",async()=>{

    const p2 = await ctxt.newPage();
    await p2.goto("https://eventhub.rahulshettyacademy.com/");
    await p2.locator("#event-card").first().waitFor();
    await p2.getByText("Browse Events →").click();
    const name= await p2.locator(".text-3xl").textContent();
    console.log(name);


})