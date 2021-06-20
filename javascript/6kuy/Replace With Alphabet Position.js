/* Replace With Alphabet Position [6 kyu]
    Welcome.
    In this kata you are required to, given a string, replace every letter with its position in the alphabet.
    If anything in the text isn't a letter, ignore it and don't return it.

    "a" = 1, "b" = 2, etc.

    Example
    alphabetPosition("The sunset sets at twelve o' clock.")
    Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
*/

function alphabetPosition(text){
    //a => 97 , A=>65
    const final = []
    for (const word of [...text.replace(/[^a-zA-Z]/gi, "")]) {
        if(word.charCodeAt() >= 97 && word.charCodeAt() <= 122) final.push(word.charCodeAt() - 96)
        if(word.charCodeAt() >= 65 && word.charCodeAt() <= 90) final.push( word.charCodeAt() - 64)
    }
    return final.join(' ')
}
// alphabetPosition("The sunset sets at twelve o' clock.")
alphabetPosition("The narwhal bacons at midnight.")

/* Clever Answer

function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
}

*/