//write a function that takes in a number and adds up the sum of is digits

//My solution
function addDigits(num){
  const numArray = num.toString().split('');
  let sum = 0;

  numArray.forEach(element => {
    sum += parseInt(element);
  });

  return sum
}

console.log(addDigits(29));
console.log(addDigits(48));


//Instructor Solution
function addTwoDigits(num){
  // let numArray = num.toString();
  // numArray = numArray.split('');
  // numArray = numArray.reduce((num1, num2) => parseInt(num1) + parseInt(num2));
  return num.toString().split('').reduce((num1, num2) => parseInt(num1) + parseInt(num2));;
}

console.log(addTwoDigits(29));
console.log(addTwoDigits(48));