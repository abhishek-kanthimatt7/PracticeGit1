
import {expect, test} from '@playwright/test';

test("EHAPILoginTest",async({request})=>{

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
    console.log(jsonLoginResponse.token); 

})