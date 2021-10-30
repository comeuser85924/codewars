/* Your order, please [6 kyu]
  Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
	Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
	If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

	Examples
	"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
	"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
	""  -->  ""
*/


//My Answer
function order(words){
	if(words === '') return ''
	const wordsList = words.split(' ')
	const newList = []
	for (let i = 1; i <= wordsList.length; i++) {
		const newItem = wordsList.filter((x)=>{ return x.replace(/[^0-9]/ig,"").indexOf(i) > -1 })
		newList.push(newItem[0])
	}
	return newList.join(' ')
}
   
//Test
// order("is2 Thi1s T4est 3a")
order("4of Fo1r pe6ople g3ood th5e the2")
// order("")

/* Solution Clever Answer
function order(words){
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}    
*/