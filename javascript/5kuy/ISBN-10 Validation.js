/* ISBN-10 Validation [5 kyu]
  詳細題目參考:https://www.codewars.com/kata/51fc12de24a9d8cb0e000001/train/javascript
*/

function validISBN10(isbn) {
  if(isbn.length !== 10) return false
  const finalTotal = isbn.split('').reduce((total, current, i) => {
    return (current === 'X') ? total + 100 : total + (current * (i + 1))
  }, 0)
  return (finalTotal % 11 === 0)
}

// validISBN10("1112223339") //true
// validISBN10("048665088X") //true
// validISBN10("1293000000") //true
// validISBN10("1234554321") //true
// validISBN10("1234512345") //false
// validISBN10("1293") //false
// validISBN10("X123456788") //false
// validISBN10("ABCDEFGHIJ") //false
// validISBN10("XXXXXXXXXX") //false
// validISBN10("048665088XZ") //false

