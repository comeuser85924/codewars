/* Split Strings [6 kyu]
    Complete the solution so that it splits the string into pairs of two characters. 
    If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
    
    Examples:
        solution('abc') // should return ['ab', 'c_']
        solution('abcdef') // should return ['ab', 'cd', 'ef']
*/
function solution(str){
    var start=0,end=2,arr=[];
    for(var i in str){
        if(i%2==0){
            arr.push(str.substring(start,end))
            start += 2
            end += 2
        }
    }
    var final = arr.map(function(item,i){
        return (item.length == 1) ?  item + '_' :  item
    })
    return final
}
solution('abcdefg')
/* Clever Answer
function solution(str) {
  return (str.length % 2 ? str + '_' : str).match(/../g);
}
*/