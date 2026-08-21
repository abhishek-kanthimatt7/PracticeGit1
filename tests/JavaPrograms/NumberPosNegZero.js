
const checkNumber = (number)=>
{
  if (number===0)
  {
    return `Number is ZERO`
  }

  else if(number>0)
  {
    return `Number is POSITIVE`
  }

  else if(number<0)
  {
    return `Number is NEGATIVE`
  }

}

console.log(checkNumber(0));
console.log(checkNumber(-25));
console.log(checkNumber(6));