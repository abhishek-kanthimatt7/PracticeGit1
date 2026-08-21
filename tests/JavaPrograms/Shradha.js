

// const profile = {
//     userName : "Parker Jotter",
//     followers : 569,
//     offer : 5,
//     price : 270,
//     isFollowing : true,



// };

// profile.newName = "Jean Park";
// profile["nickName"]= "JP";
// profile.rating=5;
// profile["isNotFollowing"]=false;

// profile["nickName"]="PJ";
// profile.rating = profile.rating +15;

// console.log(profile);



// for (let i=0;i<=100;i++)
// {
//   if (i%2===0)
//     {
//         console.log(i);
//     }
// }


// let i=0;
// while(i<=100)
// {
//   if(i%2!==0){
//   console.log("i=", i)}
//   i++
// }


// let prices = [250,645,300,900,50];

// let newPrices = [];

// for (let i=0;i<prices.length;i++)
// {
//   let offeredPrices = prices[i]-(prices[i]*0.1);
//   newPrices.push(offeredPrices);

// }

// console.log(newPrices);


// const mul = (a,b)=>
//     {
//         return a*b;
//     }
// console.log(mul(2,8));



// let arr = [1,2,3,4,5,6,7];

// const newarr=arr.reduce((prev,curr)=>
// {
//   return prev<curr?prev:curr;
// });

// console.log(newarr);


//protoype=using methods of one object in another 
// let student = {
//     fullName : "Carl Johnson",
//     age : 23,
//     work()
//     {
//       console.log(`I ${this.fullName} with age as ${this.age} work as a tester`);  
//     }
// }

// let teacher = {
//     fullName : "Ryan Gosling",
//     age : 38,
//     job()
//     {
//         console.log(`I ${fullName} with age as ${age} work as a developer`);
//     }
    
// }

// teacher.__proto__ = student;
// teacher.work();


//Classes=creating objects using class(blue print)


// class person
// {
//     constructor()
//     {
//         console.log("I am first");
//     }


//     eat()
//     {
//         console.log("eat");
//     }

//     setBrand(brand)
//     {
//         this.brand= brand;
//         console.log(brand);
//     }

//     work()
//     {
//         console.log("solve problems");
//     }
// }

// let p1 = new person();

// p1.eat();
// p1.setBrand("Nike");
// p1.work();


// function sum(a,b)
// {
//     console.log(a+b);
// }

// function calculator(a,b,sumCallBack)
// {
//     sumCallBack(a,b);
// }

// calculator(1,2,sum)



// function newFunc1()
// {
//  return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      console.log("I am a Promise");
//      resolve(200);
//     },5000)
//  })
// }

// let promise = newFunc1();
// console.log(promise);



// let myFunc=function (a,b){
//     return a+b;
// }
// let mySum = myFunc(3,4);
// console.log(mySum);

// let name = (a,b)=> a+b;


// console.log(name(3,5));

// let arr = ["Bengaluru","Kerala","Goa"];

// arr.forEach((val)=>{
//  console.log(val.toUpperCase());
// });

// let newArr = arr.reduce((prev,curr)=>{
//     return prev+curr;
// });
// console.log(newArr);



module.exports = class employee 
{
   get age()
   {
    return 25
   }

   get position()
   {
    return "Software Tester"
   }

   placeOfBirth = "Bengaluru"

   constructor(firstName,lastName)
   {
      this.firstName=firstName;
      this.lastName=lastName;
   }

   fullName()
   {
     return this.firstName + this.lastName;
   }

}

let e1= new employee("Chris","Martin");

console.log(e1.age);
console.log(e1.placeOfBirth);
console.log(e1.position);
console.log(e1.fullName());
console.log(e1);






