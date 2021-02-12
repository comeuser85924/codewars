/* Strip Comments [4 kyu]
    Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.
*/
function solution(input, markers) {
    var arr = input.split('\n');
    for (var index = 0; index < markers.length; index++) {
        arr =  arr.map(el =>{
            var a = el.indexOf(markers[index]);
            if( a !== -1) return el.substring(0,a);
            return el.replace(/\s*$/,'');
        })
        
    }
    return arr.join('\n').trim();
};

console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]))
// solution("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne")

/* Clever Answer
function solution(input, markers){
  return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
}
*/