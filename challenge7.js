//write a function that takes in a string that ignores special characteers and underscore, is case insentive, ignore spaces and sees if it is a palindrome

// My Solution
function palindrome(str) {
  letters = /^[A-Za-z]+$/; //letters only 
  let forwardStr = '';
  let reverseStr = '';

  for (let i = 0; i < str.length; i++){
    if (str[i].match(letters)){
      forwardStr += str[i].toLowerCase();
    }
  }
  for (let j = str.length - 1; j >= 0; j--){
    if (str[j].match(letters)){
      reverseStr += str[j].toLowerCase();
    }
  }

  //check to palindore
  if (forwardStr === reverseStr)
  {
    return true
  } else {
    return false
  }
}

console.log(palindrome('A man, a plan, a canal. Panama'))



//Instructor Solution
function isPalindrome(str){
  let forwardStr = str.toLowerCase().replace(/[\W_]/g, '');
  let reverseStr = forwardStr.split('').reverse().join('');

    //check to palindore
    if (forwardStr === reverseStr)
    {
      return true
    } else {
      return false
    }
}

console.log(isPalindrome('A man, a plan, a canal. Panama'))
