
//First way using headers() method


// const {test,expect,request} = require('@playwright/test');
// const APIjson = require("./testData/apidata.json");

// test ("Validating Response Headers",async({request})=>{
//     const r1 = await request.get("/booking/1",{
//         data:APIjson.postcalldata
        
//     })
//     const headersValue= r1.headers();
//     console.log(headersValue);

//     //Type of assertions for Response Headers
//     expect(headersValue.server).toEqual("Heroku");
//     expect(headersValue["x-powered-by"]).toEqual("Express")

 

// });


//********************************************************************************//


//Second way using headersArray() method

// const {test,expect,request} = require('@playwright/test');
// const APIjson = require("./testData/apidata.json");

// test ("Validating Response Headers",async({request})=>{
//     const r1 = await request.get("/booking/1",{
//         data:APIjson.postcalldata
        
//     })
//     const headersArrayValue= r1.headersArray();
//     console.log(headersArrayValue);

//     //Type of assertions for Response Headers
//     expect(headersArrayValue.length).toBe(10);
   

 

// });