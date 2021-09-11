/* Detect Pangram [6 kyu]
  A pangram is a sentence that contains every single letter of the alphabet at least once. 
  For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
  Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/


//My Answer
function isPangram(string){
  const pangramTxtList = string.replace(/[^a-zA-Z]/gi, "").toLowerCase().split('').sort()
  const wordList = pangramTxtList.filter((item, index) => pangramTxtList.indexOf(item) === index)
  console.log()
  return (wordList.length >= 26) ? true : false
  // pangramTxtList.f
}

//Test
isPangram('The quick brown fox jumps over the lazy dog')

/* Solution Clever Answer

*/