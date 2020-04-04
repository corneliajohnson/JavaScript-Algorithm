//Write a function that takes in a number and returns the factorial

//My soultion
function factorial(num) {
  let total = 1;
  for (let i = 1; i <= num; i++){
    total *= i
  }
  return total;
}

console.log(factorial(5))

//Instrutor Solution
//Soultion 1 - same as mine
