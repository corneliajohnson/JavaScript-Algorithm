//Write a function that takes in a string and reverse its value
//Exmaple Retuens:
//yourFunction('codegod') will return 'dogedoc'

//My Soultion
function reverseString(str){
  let reverseStr = '';
  for (let i = str.length -1; i >= 0; i--)
  {
    reverseStr += str[i]
  }
  return reverseStr
}

console.log(reverseString('javascript'))


//Instructor Solutions

//Solution 1
function reverseString2(word){
  let reversedWord = word.split('').reverse().join('');
  return reversedWord
}
console.log(reverseString2('javascript'))


//Solution2 - Same as mine
