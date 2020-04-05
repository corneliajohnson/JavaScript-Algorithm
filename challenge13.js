//Write a function that takes in a string and finds out if it is a valid time or not

//My Solution
function validTime(str) {
  timeString = str.split(':')
  let hour = parseInt(timeString[0]);
  let minute = parseInt(timeString[1]);

  if ( hour < 24 && minute < 60) {
    return true;
  } else {
    return false;
  }
}

console.log(validTime('22:00'))


//Instructor Solution
function isValidTime(time) {
  let timeArray = time.split(':');

  if(Number(timeArray[0]) > 23) {
    return false
  } else if (Number(timeArray[1]) > 59) {
    return false
  } else {
    return true;
  }
}

console.log(isValidTime('22:00'))