/* Write Number in Expanded Form - Part 2 [6 kyu]
    https://www.codewars.com/kata/58cda88814e65627c5000045/train/javascript
*/

//My Answer
function expandedForm(num){
  const newArr = num.toString().split('.')[0].split('')
  let final = []
  for (let i = 0; i < newArr.length; i++) {
    if(newArr[i] !== '0') {
      final.push(newArr[i] * (10 ** (newArr.length - i - 1)))
    }
  }
  const newArr2 = num.toString().split('.')[1].split('')
  for (let i = 1; i <= newArr2.length; i++) {
    if(newArr2[i - 1] !== '0') {
      final.push(`${newArr2[i - 1]}/${(10 ** i)}`)
    }
  }
  return final.join(' + ')
}

//Test
// expandedForm(807.304)
// expandedForm(1.24)
// expandedForm(4.28)
expandedForm(7.304)

/* Solution Clever Answer

*/