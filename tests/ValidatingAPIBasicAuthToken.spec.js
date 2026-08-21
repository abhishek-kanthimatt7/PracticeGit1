
// const {test,expect}=require('@playwright/test');
// const APIjson = require("./testData/apidata.json");

// let tokenvalue;
// test.beforeAll("Generating API basic auth token",async({request})=>{
   
//     const tokenresp=await request.post("/auth",{
//         data:{
//             "username" : "admin",
//             "password" : "password123"
//         }
//     })
//    tokenvalue=(await tokenresp.json()).token;
//    console.log(tokenvalue);
// });


// test("generate info",async({request})=>{
 
//    const r1= await request.get("booking/1")

//    console.log(await r1.json());
// })






// test("Updating using PUT call",async ({request})=>{

//     const tr =await request.put("/booking/1",{
//         headers:{
//             Cookie:`token=${tokenvalue}`
//         },
//         data:APIjson.putcalldata
//     })

//     expect(tr.status()).toBe(200);
// })