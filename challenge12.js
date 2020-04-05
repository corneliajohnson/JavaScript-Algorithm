//Write a function that takes in a string and returns the largest word in the Array

//My Solution
function largestWord(str) {
  let words = str.replace(/[.,!,?]+/g, '');
  words = words.split(' ');
  let wordLengths = [];
  let longestWord, longest;

  for(let i = 0; i < words.length; i++){
    wordLengths.push(words[i].length);
    longest = Math.max(...wordLengths);
    longestWord = wordLengths.indexOf(longest);
  }

  return words[longestWord];
}

console.log(largestWord('I am the longest word.'));

//Instructor Solution
function largestWord2(str) {
  let filteredArray = str.replace(/[\W_]/g, ' ').split(' ');
  let largest = ''

  filteredArray.forEach((word) => {
    largest = word.length > largest.length ? word : largest;
  });

  return largest;
}

console.log(largestWord2('I am the longest word.'));
