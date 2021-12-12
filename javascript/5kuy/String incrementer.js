/* String incrementer [5 kyu]
  Your job is to write a function which increments a string, to create a new string.
	If the string already ends with a number, the number should be incremented by 1.
	If the string does not end with a number. the number 1 should be appended to the new string.

	Examples:
	foo -> foo1
	foobar23 -> foobar24
	foo0042 -> foo0043
	foo9 -> foo10
	foo099 -> foo100

	Attention: If the number has leading zeros the amount of digits should be considered.
*/

//My Answer
function incrementString (strng) {
	// 以 foobar001 為例
	const findNumber = strng.replace(/[^0-9]/ig,"") // 先找出數字部分  => 001
	const textLen = strng.length - findNumber.length // 文字與數字部分長度差異 => 9 - 3 = 6(文字)
	const frontText = strng.slice(0, textLen) // 取得文字部分  => foobar
	const backNumberText =strng.slice(textLen, strng.length) // 取得數字部分 =>  001

	function addZero(num, length) { // 遞迴，補 0 
		if(num.toString().length >= length) {
				return num.toString();
		}
		return addZero("0" + num, length)
	}
	return frontText +  addZero(Number(backNumberText) + 1, backNumberText.length)
}

//Test
// incrementString("foobar000")
// incrementString("foo")
// incrementString("foobar001")
// incrementString("foobar99")
// incrementString("foobar099")
incrementString("")

/* Solution Clever Answer

*/