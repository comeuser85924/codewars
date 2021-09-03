/* Beeramid [5 kyu]
  Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! 
  To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. 
  And then probably drink those beers, because let's pretend it's Friday too.
  A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
  Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
    1.your referral bonus, and

    2.the price of a beer can
*/

//My Answer
function beeramid(bonus, price){
  const bottleTotal = Math.floor(bonus/price)
  if (bottleTotal === 0) return 0
  let sum = 0
  let outside = 0
  for (let i = 1; sum <= bottleTotal; i++) {
    sum = sum + i*i
    if(sum <= bottleTotal)  outside = i
  }
  return outside
}

//Test
// beeramid(1500, 2) //12
// beeramid(5000, 3) //16
// beeramid(9, 2) //s1
// beeramid(0, 4 //0
// beeramid(21, 1.5) //3
// beeramid(-1, 4) //0
// beeramid(454, 5) //5

/* Solution Clever Answer

*/