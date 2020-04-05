//Write a function that takes in a string that has no space, bu new words are denoted with capital letters and retun a lowervase spaced ot string

//My Solution
function makeSentence(str){
  str = str.match(/[A-Z]*[^A-Z]+/g).join(' ').toLowerCase()
  return str
}

console.log(makeSentence('CorneliaJohnsonReallyCodes'))


//Instructor solution
function amendTheSentence(str){
  let strArry = str.split('');

  for(let i = 0; i < strArry.length; i++){
    if(strArry[i] !== strArry[i].toLowerCase()){
      strArry[i] = strArry[i].toLowerCase();
      strArry.splice(i, 0, ' ');
    }
  }

  strArry = strArry.join('').trim('');

  return strArry
}

console.log(amendTheSentence('CorneliaJohnsonReallyCodes'))
