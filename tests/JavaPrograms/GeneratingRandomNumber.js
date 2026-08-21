
//First way

function getRandomNumber()
{
    return Math.ceil(Math.random() * 10);
}

for (let i=0;i<5;i++)
{
    console.log(getRandomNumber());
}

//Second way

const randomNumber  = ()=> Math.trunc(Math.random()*5) 
for (let i=0;i<5;i++)
{
    console.log(randomNumber());
}



