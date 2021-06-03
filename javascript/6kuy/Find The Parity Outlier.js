/* Turn String Input into Hash [6 kyu]
    You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
    The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
    Write a method that takes the array as an argument and returns this "outlier" N.

    Examples
    [2, 4, 0, 100, 4, 11, 2602, 36]
    Should return: 11 (the only odd number)

    [160, 3, 1719, 19, 11, 13, -21]
    Should return: 160 (the only even number)
*/
function findOutlier(integers){
    const evenArr = integers.map((item)=>{
        if( Math.abs(item) % 2 === 0 )  return true
        return item
    }) //[ true, true, true, true, 3 ]
    const oddArr = integers.map((item)=>{
        if( Math.abs(item) % 2 !== 0 )  return true
        return item
    })//[ true, 6, true, true, 3 ]
    const evenCounts ={} 
    const oddCounts ={}
    evenArr.forEach((x)=> { evenCounts[x] = (evenCounts[x] || 0)+1; }); //{"3":1,"true":4}
    oddArr.forEach((x)=> { oddCounts[x] = (oddCounts[x] || 0)+1; }); //{"3":1,"6":1,"true":3}
    if(oddCounts.true>evenCounts.true){ // counts2 的 ture 比 counts 多的話，就表示奇數陣列出現異常值
        const final = oddArr.filter((item)=>{  return item !== true })
        return final[0]
    }else{ // 否則就表示偶數陣列出現異常值
        const final = evenArr.filter((item)=>{  return item !== true })
        return final[0]
    }
}

findOutlier([0, 1, 2])
findOutlier([1, 2, 3])
findOutlier([2,6,8,10,3])
findOutlier([0,0,3,0,0])
findOutlier([1,1,0,1,1])
findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])
findOutlier([160, 3, 1719, 19, 11, 13, -21])

    // console.log(`偶數陣列:${evenArr},計算結果:${JSON.stringify(counts)}`)
    // console.log(`奇數陣列:${oddArr},計算結果:${JSON.stringify(counts2)}`)

    // return `Should return: ${second} (the only odd number)`
/* Clever Answer
function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}
*/