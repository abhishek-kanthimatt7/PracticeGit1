
//First way

let a= 10, b=20;

console.log(`Before Swapping a is ${a} & b is ${b}`)
let temp=a;
a=b;
b=temp;

console.log(`After Swapping a is ${a} & b is ${b}`)


//Second way

let a= 100, b=200;

console.log(`Before Swapping a is ${a} & b is ${b}`);

[a,b]=[b,a];

console.log(`After Swapping a is ${a} & b is ${b}`)

