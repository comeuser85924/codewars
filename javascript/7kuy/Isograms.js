/* Isograms [7 kyu]
    An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
    Implement a function that determines whether a string that contains only letters is an isogram. 
    Assume the empty string is an isogram. Ignore letter case.

    isIsogram("Dermatoglyphics") == true
    isIsogram("aba") == false
    isIsogram("moOse") == false // -- ignore letter case
*/
function isIsogram(str){
    return !/(.).*\1/.test(str.toLowerCase())
    // console.log([...str.toLowerCase()].some(function(v,i,a){return a.lastIndexOf(v)!=i;}))
}

isIsogram("Dermatoglyphics")
isIsogram("isogram")
isIsogram("aba")
isIsogram("moOse")
isIsogram("isIsogram")
isIsogram("")

/* Clever Answer
*/