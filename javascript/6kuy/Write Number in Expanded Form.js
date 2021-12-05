/* Write Number in Expanded Form [6 kyu]
  You will be given a number and you will need to return it as a string in Expanded Form. For example:

  expandedForm(12); // Should return '10 + 2'
  expandedForm(42); // Should return '40 + 2'
  expandedForm(70304); // Should return '70000 + 300 + 4'

  NOTE: All numbers will be whole numbers greater than 0.
*/

//My Answer
function expandedForm(num){
  const newArr = num.toString().split('')
  let final = []
  for (let i = 0; i < newArr.length; i++) {
    if(newArr[i] !== '0') {
      final.push(newArr[i] * (10 ** (newArr.length - i - 1)))
    }
  }
  return final.join(' + ')
}

//Test
expandedForm(12)
// expandedForm(42)
// expandedForm(70304)

/* Solution Clever Answer

*/