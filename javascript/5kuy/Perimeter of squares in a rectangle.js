/* Perimeter of squares in a rectangle [5 kyu]
  The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. 
  It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80
*/


//My Answer
function perimeter(n) {
  const perimeterArr = fibonacci(n)
  const sum = perimeterArr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
  );
  return sum * 4
}

function fibonacci(n) {
  let arr;
  (n < 1) ? arr = [1]: arr = [1,1]
  for (let i = 0; i < n-1; i++) {
    arr.push(arr[i] + arr[i+1]);
  }
  return arr
}
//Test
console.log(perimeter(0))
console.log(perimeter(5))
console.log(perimeter(7))
console.log(perimeter(20))
console.log(perimeter(30))

/* Solution Clever Answer

*/