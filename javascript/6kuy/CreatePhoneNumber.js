/* CreatePhoneNumber [6 kyu]
    Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
*/


function createPhoneNumber(numbers){
    numbers.splice(0,0, '(')
    numbers.splice(4,0, ')')
    numbers.splice(5,0, ' ')
    numbers.splice(9,0, '-')    
    return numbers.join('')
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
/* Clever Answer
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}
*/