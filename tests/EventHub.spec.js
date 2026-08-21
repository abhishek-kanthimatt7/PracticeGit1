const { test, expect,request } = require("@playwright/test");





let token;
test.beforeAll("WebAPItokenIntegration",async()=>{
   
    const apiContext = await request.newContext();
    const loginResp = await apiContext.post("https://api.eventhub.rahulshettyacademy.com/api/auth/login",{
        data:{"email":"CarlJohnson_7@yahoo.com",
            "password":"CarlJohnson_7"}
    })

    expect(loginResp.status()).toBe(200);
    expect(loginResp.ok()).toBeTruthy();
    const loginJsonResp = await loginResp.json();
    token = loginJsonResp.token;
    console.log(token);

});

// test("eventHubRegistration", async ({ browser, page }) => {
//   const URL = "https://eventhub.rahulshettyacademy.com/login";
//   const userName = "abhi@yahoo.com";
//   const password = "Ronaldo@7";
//   await page.goto(URL);
//   await page.getByRole("link", { name: "Register" }).click();
//   await page.getByPlaceholder("you@email.com").fill(userName);
//   await page.locator("#register-password").fill(password);
//   await page.getByPlaceholder("Repeat your password").fill(password);
//   await page.locator("[type='submit']").click();
// });

test("eventHubLogin", async ({ page }) => {
 
   await page.addInitScript((value)=>{
     window.localStorage.setItem("eventhub_token",value)
   },token);

  // await page.locator("#email").fill(userName);
  // await page.locator("//input[@id='password']").fill(password);
  // await page.locator("[type='submit']").click();
   const URL = "https://eventhub.rahulshettyacademy.com";
  // const userName = "abhi@yahoo.com";
  // const password = "Ronaldo@7";
  await page.goto(URL);
  await page.getByText("Browse Events →").click();
  await page.locator("#event-card").first().waitFor();
  const titles = await page.locator("h3.font-semibold").allTextContents();
  console.log(titles);
  const titleCount = await page.locator("h3.font-semibold").count();
  for (let i = 0; i < titleCount; i++) {
    if (titles[i] === "Hollywood Monsoon Night — Los Angeles") {
      await page.locator("#book-now-btn").nth(i).click();
      break;
    }
  }
  await page.locator("[class='object-cover']").waitFor();
  await expect(page.locator("h1.text-2xl")).toHaveText(
    "Hollywood Monsoon Night — Los Angeles");
  await page.locator(".w-9").last().click();
  await page.getByPlaceholder("Your full name").fill("Abhishek");
  await page.locator("[type='email']").fill("CarlJohnson_7@yahoo.com");
  await page.locator("#phone").fill("9848052919");
  await expect (page.locator("div.text-gray-600 span").last()).toHaveText("$5,000");
  await page.locator("#confirm-booking").click();
  await page.waitForTimeout(5000);  
});
