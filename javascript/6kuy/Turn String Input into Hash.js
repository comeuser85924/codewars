/* Turn String Input into Hash [6 kyu]
    Please write a function that will take a string as input and return a hash. 
    The string will be formatted as such. The key will always be a symbol and the value will always be an integer.

    "a=1, b=2, c=3, d=4"

    This string should return a hash that looks like
    { 'a': 1, 'b': 2, 'c': 3, 'd': 4}
*/
function strToHash(str){
    if(str === '') return {}
    const arr =  str.split(',').map((item)=>item.trim().split('='))
    const obj = {}
    for (const item of arr) {
        obj[item[0]] = Number(item[1])     
    }

    // const arr =  str.split(',').map((item)=>item.trim())
    // const obj = {}
    // for (const item of arr) {
    //     for (let i=0;i<item.length;i++) {
    //         if(i === 0) obj[item[i]] = Number(item[i+2])       
    //     }
    // }

    return obj
    console.log(obj)
}

strToHash("a=1, b=2, c=3, d=4")
// strToHash("")

/* Clever Answer
function strToHash(str){
  let result = {}
  if (str.length) {
    let items = str.split(", ")
    items.forEach(item => {
      const [key, val] = item.split("=")
      result[key] = +val
    })  
  }
  return result
}
*/