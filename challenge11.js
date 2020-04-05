//Write a function that takes in a string and returns a boolean on whether or not it is a digit. A digit is defined as a number between 0-9

//My Solution
function isNumber(str){
  const parsedNum = parseInt(str)
  return Number.isInteger(parsedNum)
}

console.log(isNumber('1'))

//Instructor Solution
function isDigit(str){
  const digitArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return digitArray.includes(str)
}

console.log(isDigit('1'))