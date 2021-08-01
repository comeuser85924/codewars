/* Tribonacci Sequence [6 kyu]

*/
tribonacci([1,1,1],10)
function tribonacci(signature,n){
    const a = [1,2,2]
    console.log(typeof a,typeof n)

    const newData = signature
    for (let i = 0; i < n; i++) {
        newData.push(newData[i]+newData[i+1]+newData[i+2])
    }
    // console.log(typeof newData)
    // console.log(typeof newData.slice(0,n))
    return newData.slice(0,n)
}
    // let x = 0
    // while (n > x) {
    //     console.log(newData)
    //     x++
    //     newData.reduce((total, current, i, array) => {   
    //         return newData.push(total+array[i]+array[i+1]+array[i+2])
    //     },0)
    // }
function  unittest(main,value){
    // console.log(main,value)
    // console.log(main === value)
}

// tribonacci([1,1,1],10)
// tribonacci([0,0,1],10)
// tribonacci([1,1,1],1)
// tribonacci([300,200,100],0)
// tribonacci([0.5,0.5,0.5],30)

// unittest(tribonacci([1,1,1],10),[1,1,1,3,5,9,17,31,57,105])
// unittest(tribonacci([0,0,1],10),[0,0,1,1,2,4,7,13,24,44])
// unittest(tribonacci([0,1,1],10),[0,1,1,2,4,7,13,24,44,81])
// unittest(tribonacci([1,0,0],10),[1,0,0,1,1,2,4,7,13,24])
// unittest(tribonacci([0,0,0],10),[0,0,0,0,0,0,0,0,0,0])
// unittest(tribonacci([1,2,3],10),[1,2,3,6,11,20,37,68,125,230])
// unittest(tribonacci([3,2,1],10),[3,2,1,6,9,16,31,56,103,190])
// unittest(tribonacci([1,1,1],1),[1])
// unittest(tribonacci([300,200,100],0),[])
// unittest(tribonacci([0.5,0.5,0.5],30),[0.5,0.5,0.5,1.5,2.5,4.5,8.5,15.5,28.5,52.5,96.5,177.5,326.5,600.5,1104.5,2031.5,3736.5,6872.5,12640.5,23249.5,42762.5,78652.5,144664.5,266079.5,489396.5,900140.5,1655616.5,3045153.5,5600910.5,10301680.5])



/* Clever Answer

*/