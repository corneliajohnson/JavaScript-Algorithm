//Write a function that takes in an array of postive numbers and returns the first number that is duplicated. if no duplicates return -1

//My Solution
function firstDuplicate(numArray){
  for (let i = 0; i < numArray.length; i++){
    if (numArray[i] === numArray[i + 1]){
      return numArray[i];
    } 
  }
  return -1
}

console.log(firstDuplicate([2,3,3,1,5,2]));
console.log(firstDuplicate([2,2]));
console.log(firstDuplicate([2,1,3]));


//My Solution
function firstDuplicate2(numArray){
  let dulipcateObject = {};

  for(let num of numArray) {
    if (dulipcateObject.hasOwnProperty(num)){
      return num
    }
    dulipcateObject[num] = num;
  }

  return -1
}

console.log(firstDuplicate2([2,3,3,1,5,2]));
console.log(firstDuplicate2([2,2]));
console.log(firstDuplicate2([2,1,3]));