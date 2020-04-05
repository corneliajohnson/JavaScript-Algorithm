//write a function that takes in two arrays and return an array of the unique value

//My Solution



//Instructor Solution
function differenceArray(arr1, arr2){
  let uniqueArray = [];

  for(let val of arr1) {
    if (!arr2.includes(val) && !uniqueArray.includes(val)) {
      uniqueArray.push(val);
    }
  }

  for(let val of arr2) {
    if (!arr1.includes(val) && !uniqueArray.includes(val)){
      uniqueArray.push(val);
    }
  }
  
  return uniqueArray;
}

console.log(differenceArray([1,2,3,5], [1,2,3,4,5]));
console.log(differenceArray([1,'calf', 3, 'piglet'], [7, 'fily']));
console.log(differenceArray([2,1,3], [3,2,1]));