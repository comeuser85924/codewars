/* Vowel Count [7 kyu]
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
function getCount(str) {
    var vowelsCount = 0;
    var list = ['a','e','i','o','u']
    for(var i=0;i<str.length;i++){
        for(k in list){
            if(list[k] == str[i])
                vowelsCount ++
        }
    }
    // enter your majic here
    
    return vowelsCount;
}

Test.assertEquals(getCount("abracadabra"), 5)

/* Clever
function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}
*/