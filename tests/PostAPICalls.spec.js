
// const {test,expect,request} = require('@playwright/test');

// test ("POST APi request1",async({request})=>{
//     const r1 = await request.post("/booking",{
//         data:{        
//               "firstname" : "Jim",
//               "lastname" : "Brown",
//               "totalprice" : 111,
//               "depositpaid" : true,
//               "bookingdates" : {
//               "checkin" : "2018-01-01",
//               "checkout" : "2019-01-01"
//     },
//               "additionalneeds" : "Breakfast"
// }
        
//     })
//     const resp1=await r1.json();
//     console.log(resp1);

//     Type of assertions for API testing

//     expect(r1.status()).toBe(200);
//     expect(r1.statusText()).toBe("OK");
//     expect(r1.ok()).toBeTruthy();
//     expect(resp1.booking).toMatchObject({
//     firstname: 'Jim',
//     lastname: 'Brown',
//     totalprice: 111,
//     depositpaid: true,
//     bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
//     additionalneeds: 'Breakfast'
//   })

// });

//********************************************************************************//
//Second way is to import apidata.json file which contains body(payload) instead of directly putting in script

// const {test,expect,request} = require('@playwright/test');
// const APIjson = require("./testData/apidata.json");

// test ("POST APi request1",async({request})=>{
//     const r1 = await request.post("/booking",{
//         data:APIjson.postcalldata
        
//     })
//     const resp1=await r1.json();
//     console.log(resp1);

//     //Type of assertions for API testing

//     expect(r1.status()).toBe(200);
//     expect(r1.statusText()).toBe("OK");
//     expect(r1.ok()).toBeTruthy();
//     expect(resp1.booking).toMatchObject(APIjson.postcalldata)

// });