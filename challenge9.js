//Write a function that takes in a string and ccapitalize the first letter of each word

//My Solution
function titleCase(str){
  let titleStr = ' ';

  for(let i = 0; i < str.length; i++) {
    //if followed by space or first letter
    if (str[i-1] === ' ' || str[i-1] == undefined){
      titleStr += str[i].toUpperCase();
    } else {
      titleStr += str[i];
    }
  }

  return titleStr;
}

console.log(titleCase('i want to work in Tech'))


//Instuctor Solution

function titleCase2(str) {
  let titleCaseSentence = str.split(' ');

  titleCaseSentence = titleCaseSentence.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();

    word = firstLetter.concat(word.slice(1, word.length));

    return word;
  })
  titleCaseSentence = titleCaseSentence.join(' ');

  return titleCaseSentence;
}

console.log(titleCase2('i want to work in Tech'))
