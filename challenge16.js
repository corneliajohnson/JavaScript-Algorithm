// Write a function that takes a string a parses out all the numbers and adds them together

//My Solution
function addAllNumbers(str){
  let numbersOnly = str.match(/[0-9]+/g);
  let total = 0;

  if (numbersOnly != null) {
    numbersOnly.forEach(element => {
    total += parseInt(element);
    });
  }

  return total;
}

console.log(addAllNumbers('2 apples,  12 oranges'));
console.log(addAllNumbers('123450'));
console.log(addAllNumbers('Your payment is invalid'));


//Instrutors Solutions
function sumUpNumbers(str) {
  const nums = str.match(/\d+/g) || [];
  let sum = 0;

  nums.forEach((num) =>{
    sum += Number(num)
  });

  return sum;
}

console.log(sumUpNumbers('2 apples,  12 oranges'));
console.log(addAllNumbers('123450'));
console.log(addAllNumbers('Your payment is invalid'));