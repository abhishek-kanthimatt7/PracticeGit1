
import {expect, test} from '@playwright/test';
let loginToken;
test.beforeAll("EHAPILoginTest",async({request})=>{

    const loginResponse = await request.post("https://api.eventhub.rahulshettyacademy.com/api/auth/login",{
        headers:{
            "content-type" : "application/json"
        },
        data : {
            "email":"CarlJohnson_7@yahoo.com",
            "password":"CarlJohnson_7"
        }
    })
   
    expect(loginResponse.status()).toBe(200);
    expect(loginResponse.statusText()).toBe("OK");
    expect(loginResponse.ok()).toBeTruthy();

    const jsonLoginResponse = await loginResponse.json();
    expect(jsonLoginResponse.user.email).toMatch("CarlJohnson_7@yahoo.com");
    loginToken = jsonLoginResponse.token;
    console.log(loginToken); 

})



test("EHUITest",async({page})=>{
    
    await page.addInitScript((value)=>{

        window.localStorage.setItem("eventhub_token" , value)

    },loginToken);
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