//Write a function that takes a number array with two postive numbers and finds the sum of all numbers between and including the largest value and the smaillest value

//My Solution
function addBetweenNumbers(numArray) {
  const minNum = Math.min(...numArray);
  const maxNum = Math.max(...numArray);
  let sum =0
  

  for (let i = minNum; i <= maxNum; i++){
    sum += i;
  }

  return sum;
}

console.log(addBetweenNumbers([10,5]));
console.log(addBetweenNumbers([3,7]));

//Instructor Solution
//Same as my solution