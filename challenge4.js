//Write a function that if a number 3 greater is divisible by 3 returns 'fizz', by five returns 'buzz', by both returns 'fizbuzz' or none ''.

//My Solution

function fizzbuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  } else if (num % 3 === 0) {
    return "fizz";
  } else if (num % 5 === 0) {
    return "buzz";
  } else {
    return '';
  }
}

console.log(fizzbuzz(15));

//Instrctor Solution

//Soultion1 same as mine

//Solution 2
function fizzbuzz2(num) {
  let word = '';

  if (num % 3 === 0){
    word = word.concat('fizz')
  }
  if (num % 5 === 0){
    word = word.concat('buzz')
  }

  return word
}

console.log(fizzbuzz2(5));
