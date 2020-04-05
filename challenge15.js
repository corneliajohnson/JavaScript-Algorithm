//Write a function that takes in an array of numbers and finds out if there are any duplicate numbers

//My Solution
function  duplicateNumber(numArray) {
  numArray.sort()

  for (let i = 0; i < numArray.length; i++) {
    if(numArray[i] === numArray[i + 1]) {
      return true
    }
  }

  return false
}

console.log(duplicateNumber([1,2,3,1]));
console.log(duplicateNumber([3,1]));
console.log(duplicateNumber([0,4,5,0,3,6]));
