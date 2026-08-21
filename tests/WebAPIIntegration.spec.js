
const {test,expect,request}=require('@playwright/test');

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

    const r1= await apiContext.post("https://api.eventhub.rahulshettyacademy.com/api/bookings",{
        headers:{
            Authorization : `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data : {"customerName":"Abhishek",
               "customerEmail":"CarlJohnson_7@yahoo.com",
               "customerPhone":"9823678902","quantity":2,
               "eventId":2}
    })

    expect(r1.status()).toBe(201);

    const r2 = await r1.json();
    console.log(r2);

});






test("Event Booking API",async({page})=>{
    
    await page.addInitScript((value)=>{
     window.localStorage.setItem("eventhub_token",value)
   },token);
    const URL = "https://eventhub.rahulshettyacademy.com";
    await page.goto(URL);  
})

// test("eventHubLogin", async ({ page }) => {
 
//    await page.addInitScript((value)=>{
//      window.localStorage.setItem("eventhub_token",value)
//    },token);

//   // await page.locator("#email").fill(userName);
//   // await page.locator("//input[@id='password']").fill(password);
//   // await page.locator("[type='submit']").click();
//    const URL = "https://eventhub.rahulshettyacademy.com";
//   // const userName = "abhi@yahoo.com";
//   // const password = "Ronaldo@7";
//   await page.goto(URL);
//   await page.getByText("Browse Events →").click();
//   await page.locator("#event-card").first().waitFor();
//   const titles = await page.locator("h3.font-semibold").allTextContents();
//   console.log(titles);
//   const titleCount = await page.locator("h3.font-semibold").count();
//   for (let i = 0; i < titleCount; i++) {
//     if (titles[i] === "Hollywood Monsoon Night — Los Angeles") {
//       await page.locator("#book-now-btn").nth(i).click();
//       break;
//     }
//   }
//   await page.locator("[class='object-cover']").waitFor();
//   await expect(page.locator("h1.text-2xl")).toHaveText(
//     "Hollywood Monsoon Night — Los Angeles");
//   await page.locator(".w-9").last().click();
//   await page.getByPlaceholder("Your full name").fill("Abhishek");
//   await page.locator("[type='email']").fill("CarlJohnson_7@yahoo.com");
//   await page.locator("#phone").fill("9848052919");
//   await expect (page.locator("div.text-gray-600 span").last()).toHaveText("$5,000");
//   await page.locator("#confirm-booking").click();
//   await page.waitForTimeout(5000);  
// });



