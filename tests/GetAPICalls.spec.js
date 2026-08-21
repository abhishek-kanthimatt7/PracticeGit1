
const {test,expect,request} = require ('@playwright/test');

// Third Way
// let reqContext2;
// test.beforeAll("Before All",async()=>{
//     reqContext2 = await request.newContext({baseURL:"https://restful-booker.herokuapp.com",extraHTTPHeaders:{Accept:"application/json"}});
// })


//********************************************************************************//
//First Way
// test("GET Api request1",async({request})=>{
//     const r1 = await request.get("https://restful-booker.herokuapp.com/booking",{headers:{Accept:"application/json"}});
//     const resp1= await r1.json();
//     expect(resp1.status()).toBe(200);
//     expect(resp1.ok()).toBeTruthy();     
//     console.log(resp1);

// })

//********************************************************************************//
//Second Way
// test("GET Api request2",async()=>{
//     const reqContext = await request.newContext({baseURL:"https://restful-booker.herokuapp.com",extraHTTPHeaders:{Accept:"application/json"}});
//     const r1 = await reqContext.get("/booking");
//     const resp1= await r1.json();
//     console.log(resp1);
// })

//********************************************************************************//
//Third Way
// test("GET Api request3",async()=>{
//     const r1 = await reqContext2.get("/booking");
//     const resp1= await r1.json();
//     console.log(resp1);

// })

//********************************************************************************//
//Fourth Way
// test("GET Api request1",async({request})=>{
//     const r1 = await request.get("/booking");
//     const resp1= await r1.json();
//     console.log(resp1);

// })


//********************************************************************************//
//If we have query parameters(like firstname ,lastname and so on other details)
//  use as below(NOTE:BaseURL and headers are defined in playwright.config.js)
// test("GET Api request1",async({request})=>{
//     const r1 = await request.get("/booking",{params:{firstname="John",lastname="Smith"}});
//     const resp1= await r1.json();
//     console.log(resp1);

// })