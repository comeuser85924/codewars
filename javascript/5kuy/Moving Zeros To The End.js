/*Moving Zeros To The End [5 kyu]
    Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

    moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/
function moveZeros(arr) {
    //solution 1 - error
    // arr.map(function(x, index){
    //     console.log(x,0,x === 0) 
    //     if(x == 0) {
    //         arr2.push(0)
    //         arr.splice(index, 1);
    //     }
    // })

    //solution 2 - 
    return [...arr.filter((x) => x !== 0 ),...arr.filter((x) => x === 0 )]
    
}

// moveZeros([false,1,0,1,2,0,1,3,"a"])
// moveZeros([1,2,0,1,0,1,0,3,0,1])
// moveZeros([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])
moveZeros([9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0])

/* Clever Answer

*/