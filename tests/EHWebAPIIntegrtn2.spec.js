
import {expect, test} from '@playwright/test';
let stateInfo;
test.beforeAll("EHUILogin",async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    let URL= "https://eventhub.rahulshettyacademy.com/login";
    let userName = "CarlJohnson_7@yahoo.com"; 
    let password = "CarlJohnson_7";
    await page.goto(URL);
    await page.getByPlaceholder("you@email.com").fill(userName);
    await page.getByRole('textbox',{name:"Password"}).fill(password);
    await page.getByRole("button",{name:"Sign In"}).click();
    await expect(page.locator("#event-card").first()).toBeVisible();
    await context.storageState({path:"State.json"});
    stateInfo = await browser.newContext({storageState:"State.json"});

})



test("EHUITest",async()=>{
    
    // await page.addInitScript((value)=>{

    //     window.localStorage.setItem("eventhub_token" , value)

    // },loginToken);
    const page = await stateInfo.newPage();
    await page.goto("https://eventhub.rahulshettyacademy.com/");
    await expect(page.locator("#event-card").first()).toBeVisible();


    //Boooking Event
    await page.getByText("Explore All Events").click();
    await page.locator("#event-card").first().waitFor();
    await page.getByText("Book Now").nth(0).click();
    await expect(page.getByRole("heading",{name:"Dilli Diwali Mela"})).toBeVisible();
    await page.getByRole("button",{name:"+"}).click();
    await page.getByLabel("Full Name").fill("Carl Johnson");
    await page.getByPlaceholder("you@email.com").fill("CarlJohnson_7@yahoo.com");
    await page.getByRole("textbox",{name:"Phone Number*"}).fill("9009000091");
    await expect(page.getByText("$600").last()).toHaveText("$600");
    await page.getByRole("button",{name:"Confirm Booking"}).click();
    expect(page.getByText("Booking Confirmed! 🎉")).toHaveText("Booking Confirmed! 🎉");
    expect(page.locator("span.font-medium").nth(1)).toHaveText("Carl Johnson")
    const bookingID = await page.locator(".booking-ref").textContent();
    console.log(bookingID);

    //Checking the booking in Booked events page
    await page.getByRole("button",{name:"View My Bookings"}).click();
    await page.locator("#booking-card").first().waitFor();
    expect(page.getByText(bookingID)).toBeVisible();

    
});