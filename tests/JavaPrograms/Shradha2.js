
// const employee = require("./Shradha")

const { get } = require("node:http")


// // let e1=new employee("Declan","Rice");
// // console.log(e1.age);
// // console.log(e1.placeOfBirth);
// // console.log(e1.position);
// // console.log(e1.fullName());



// class higerEmployee extends employee
// {
    
//     constructor(firstName,lastName)
//     {
//       super(firstName,lastName)
//     }    

//     get age()
//     {
//         return 35
//     }


//     get position()
//     {
//         return "Manager"
//     }

//    get salary()
//    {
//     return 150000
//    }

// }


// let h1 = new higerEmployee("Mikel","Arteta");
// console.log(h1.age);
// console.log(h1.position);
// console.log(h1.placeOfBirth);
// console.log(h1.salary);
// console.log(h1.fullName());



//Callback functions

// function sum(a,b){
//    console.log(a+b);
// }


// function calc(a,b,sumcallback){
//     sumcallback(a,b)
// }

// calc(1,2,sum)



//callback hell

function getData(dataID,getNextData){
setTimeout(()=>{
    console.log("data" , dataID);
    if(getNextData){
    getNextData();}
},2000)
}

getData(1,()=>{
    getData(2,()=>{
        getData(3)
    })
})


//Promises


