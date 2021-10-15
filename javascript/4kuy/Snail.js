/* Snail [4 kyu]
  https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1.
*/


//My Answer
snail = function(array) {
  const results = [];
  while (array.length > 0) {
    //  因為 array 大於 0, while 會繼續執行 - 第1次
    results.push(...array.shift()) // results = [1,2,3] 
    array.forEach((current) => { results.push(current.pop());}); // results = [1,2,3,6,9]
    array.forEach((current) => { current.reverse(); }); //array = [[5,4],[8,7]]
    array.reverse(); //array = [[8,7],[5,4]]

    // 因為 array 還是大於 0, while 會繼續執行 - 第2次
    // results.push(...array.shift()) //results = [1,2,3,6,9]  --第2次--> [1,2,3,6,9,8,7] 
    // array.forEach((current) => { results.push(current.pop()); }); //results = [1,2,3,6,9,8,7] --第2次--> [1,2,3,6,9,8,7,4]
    // array.forEach((current) => { current.reverse(); }); // array = [5]
    // array.reverse(); // array = [5]

    // 因為 array 還是大於 0, while 會繼續執行 - 第3次
    // results.push(...array.shift()) // results = [1,2,3,6,9,8,7]  --第3次--> [1,2,3,6,9,8,7,4,5]
    // 剩餘因為 array 已經空了,後續就不執行了
  }
  return results;
}

//Test
// snail([[1]])
snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
// snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])


/* Solution Clever Answer
*/
