/*Double Cola [5 kyu]
    詳細題目參考:https://www.codewars.com/kata/551dd1f424b7a4cdae0001f0/train/javascript
*/
function whoIsNext(names, r){
    let len = names.length
    while (r > len) {
        r = r - len
        len = len * 2
    }
    console.log(names[Math.floor((r-1)/(len/names.length))])
    return names[Math.floor((r-1)/(len/names.length))]
    // for (const item of names) {
    //     if(r>names.length){
    //         for (let i = 0; i < 2; i++) {
    //             names.push(item)
    //         }
    //     }
    // }
    // console.log(names)
    // return names[r-1]
}
// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1)
// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52)
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951)

/* Clever Answer(I like this function)
function whoIsNext(names, r) {
  var l = names.length;
  while (r >= l) { r -= l; l *= 2; }
  return names[Math.ceil(names.length * r / l)-1];
}
*/


// "Sheldon", "Leonard", "Penny", "Rajesh", "Howard" , 5
// "Sheldon","Sheldon","Leonard","Leonard","Penny","Penny","Rajesh","Rajesh", "Howard", "Howard", 10
// "Sheldon","Sheldon","Sheldon","Sheldon","Leonard","Leonard","Leonard","Leonard","Penny","Penny","Penny","Penny","Rajesh","Rajesh","Rajesh","Rajesh", "Howard", "Howard", "Howard", "Howard", 20
// "Sheldon","Sheldon","Sheldon","Sheldon","Sheldon","Sheldon","Sheldon","Sheldon","Leonard","Leonard","Leonard","Leonard","Leonard","Leonard","Leonard","Leonard","Penny","Penny","Penny","Penny","Penny","Penny","Penny","Penny","Rajesh","Rajesh","Rajesh","Rajesh","Rajesh","Rajesh","Rajesh","Rajesh", "Howard", "Howard", "Howard", "Howard", "Howard", "Howard", "Howard", "Howard", "Howard", "Howard", "Howard", "Howard" 40
// "Sheldon","Sheldon","Sheldon","Sheldon","Sheldon","Sheldon","Sheldon","Sheldon","Leonard","Leonard","Leonard","Leonard","Leonard","Leonard","Leonard","Leonard","Penny", 17


// 5
// 10
// 20
// 40

//  r=52 

// 52-5 = 47
// 47-10 = 37
// 37-20 = 17

// 40/5 = 8
// 20/5 =4
// 10/5 = 2



