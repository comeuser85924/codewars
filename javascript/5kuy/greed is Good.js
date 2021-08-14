/*greed is Good [5 kyu]
    詳細題目參考:https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript
*/
function score(dice){
    const counter = {}
    let totalPoint = 0
    const threePointInfo = { '1':1000, '6':600, '5':500, '4':400, '3':300, '2':200 }
    const onePointInfo = { '1':100, '5':50 }
    dice.forEach(function(x) { 
        counter[x] = (counter[x] || 0) + 1; 
    });
    for (const [key,time] of Object.entries(counter)) {
        if(time >= 3 && threePointInfo.hasOwnProperty(key)){
            totalPoint += threePointInfo[key]
            if(onePointInfo.hasOwnProperty(key)){
                for (let i = 0; i < (time - 3); i++) {
                    totalPoint += onePointInfo[key]
                }
            }
        }
        else if(onePointInfo.hasOwnProperty(key)){
            for (let i = 0; i < time; i++) {
                totalPoint += onePointInfo[key]
            }
        }
    }
    console.log(totalPoint)
    return totalPoint
}

// score( [2, 3, 4, 6, 2] )
// score( [4, 4, 4, 3, 3] )
// score( [2, 4, 4, 5, 4] )
// score( [ 1, 1, 1, 1, 3 ] )
score( [ 1, 1, 1, 1, 1 ] ) //1200
// score([ 3, 3, 3, 3, 3 ]) //300
// score([ 1, 5, 1, 3, 4 ]) //250
/* Clever Answer(I like this function)

*/