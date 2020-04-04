//Write a function that takes in a string and returns the length longest string

//My Solution
function longestWord(str){
  const words = str.split(' ');
  let wordLengths = [];

  for(let i = 0; i < words.length; i++){
    wordLengths.push(words[i].length);
  }

  return Math.max(...wordLengths);
}

console.log(longestWord('wow this is a great code challenge'))



//Instructor Solution

//Solution 1
function longestWordLength(str){
  let longestLength = 0;
  let strArray = str.split(' ');

  strArray.forEach((word) => {
    longestLength = longestLength < word.length ? word.length : longestLength;
  });

  return longestLength;
}

console.log(longestWordLength('wow this is a great code challenge'))


//solution 2
function longestWordLength2(str){
  let longestLength = 0;
  let strArray = str.split(' ');

  strArray = strArray.sort((word1, word2) => {
    return word2.length - word1.length;
  });

  return strArray[0].length;
}


console.log(longestWordLength2('wow this is a great code challenge'))
