//Write a function that takes in a number that repeats the string that number of time

//My Solution
function repeatString(str, num){
  let repeatedStr = '';

  for(let i  = 0; i < num; i++){

    repeatedStr += str
  }
  return repeatedStr
}

console.log(repeatString('google', 3));



//Instructor Solution

//Solution 1
function repeatString2(str, num){
  let repeatedString = '';

  while (num > 0){
    repeatedString += str;
    num--;
  }
  return repeatedString
}
console.log(repeatString2('google', 3));


//Solution 2
function repeatString3(str, num){
  return str.repeat(num)
}
console.log(repeatString3('google', 3));