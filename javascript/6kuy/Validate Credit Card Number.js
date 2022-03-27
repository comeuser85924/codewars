/* Validate Credit Card Number [6 kyu]
  In this Kata, you will implement the Luhn Algorithm, which is used to help validate credit card numbers.
	Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.
	參考:https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2/train/javascript
*/

//My Answer
function validate(n){
	const splitList = n.toString().split('').map((x) => Number(x))
	const isEven = (splitList.length % 2) === 0 ? 0 : 1
	for (let i = isEven; i < splitList.length; i+=2) {
		splitList[i] = Number(splitList[i]) * 2
	}
	const finalList = splitList.map((item) => (item > 9) ? item - 9 : item)
	const sum = finalList.reduce((a ,b) => a + b)
	return sum % 10 === 0 ? true : false
}

//Test
validate(123)
validate(1)
validate(2121)
validate(1230)

/* Solution Clever Answer
function validate(n) {
  n = n.toString().split('').map(Number).reverse();
  return n.reduce(function (sum, digit, index) {
    if (index & 1) digit <<= 1;
    if (digit > 9) digit -= 9;
    return sum + digit;
  }, 0) % 10 == 0;
}
*/