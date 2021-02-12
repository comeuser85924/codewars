/* Count the number of Duplicates [6 kyu]
    Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.
    The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
    
    Example:
        "abcde" -> 0 # no characters repeats more than once
        "aabbcde" -> 2 # 'a' and 'b'
        "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
        "indivisibility" -> 1 # 'i' occurs six times
        "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
        "aA11" -> 2 # 'a' and '1'
        "ABBA" -> 2 # 'A' and 'B' each occur twice
*/
function duplicateCount(txt){
    if(txt == "") return 0
    var reg ,array=[];
    for(var i in txt){
        reg = new RegExp(txt[i],"gi")
        if(txt.match(reg).length>1){
            array.push(txt.match(reg).join())
        }
    }
    var result = new Set();
    var repeat = new Set();
    array.forEach(item => {
        result.has(item) ? repeat.add(item) : result.add(item);
    })
    return repeat.size
}
duplicateCount("abcde")
// duplicateCount("aabbcde")
// duplicateCount("aabBcde")
// duplicateCount("Indivisibility")

/* Clever Answer
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
*/