/* Array.diff [6 kyu]
    Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.v
*/

function arrayDiff(a, b) {
    if(a.length === 0) return []
    else if(b.length === 0) return a
    else return a.filter((item)=>!b.includes(item))
}
console.log(arrayDiff([], [4,5]))
// console.log(arrayDiff([3,4], [3]))
// console.log(arrayDiff([1,8,2], []))

/* Clever Answer
function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
}
*/
