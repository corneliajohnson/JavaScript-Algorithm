//Write a function that takes in a string for your first name and a string that returns your last name and returns then formatted in a example below.

//yourFunction('First', 'Last')will return , 'Hi my name is First Last'


//My Solution
function fullName (first, last)
{
  console.log( `Hi my name is ${first} ${last}`);
}

fullName('Cornelia', 'Johnson');


//Instructor Solution 1
function introduction (firstName, lastName)
{
  const introduction =  'Hi my name is '. concat(firstName, ' ', lastName, '.')
  return introduction;
}
console.log(introduction('Dylan', 'Isreal'));

//Instructor Solution 2
function introduction2 (firstName, lastName)
{
  const introduction =  'Hi my name is ' + firstName + ' ' + lastName + '.';
  return introduction;
}
console.log(introduction2('Dylan', 'Isreal'));

//Instructor Solution 3
function introduction3 (firstName, lastName)
{
  const introduction =  `Hi my name is ${firstName} ${lastName}.`;
  return introduction;
}
console.log(introduction3('Dylan', 'Isreal'));