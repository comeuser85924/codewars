/* Multiplesof3or5 [6 kyu]
    Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
    The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
*/

function toCamelCase(str){
    var out = "";
    if(str == '') return ''
    if(str.indexOf('-')>=0){
        str.split("-").forEach(function (el, idx) {
            if(idx === 0){
                out += el
            }else{
                for (var i=0;i<el.length;i++){
                    if(i == 0 ){
                        out += el[i].toUpperCase()
                    }else{
                        out += el[i]
                    }
                }
            }
        });
    }else if(str.indexOf('_')>=0){
        str.split("_").forEach(function (el, idx) {
            if(idx === 0){
                out += el
            }else{
                for (var i=0;i<el.length;i++){
                    if(i == 0 ){
                        out += el[i].toUpperCase()
                    }else{
                        out += el[i]
                    }
                }
            }
        });
    }
    return out
}

console.log(toCamelCase("The_stealth_warrior"))
/* Clever Answer
function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}
*/