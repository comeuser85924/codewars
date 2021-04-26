/* Where my anagrams at? [5 kyu]
    What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

        'abba' & 'baab' == true
        'abba' & 'bbaa' == true
        'abba' & 'abbba' == false
        'abba' & 'abca' == false

    Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

    anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
    anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
    anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/

function anagrams(word, words) {
    const data =[]
    const data2 = []
    const first = word.split('').sort().join('')
    const second = words.map((item)=>{return item.split('').sort().join('')})
    for (let i = 0; i < second.length; i++) {
        if(first === second[i]) data.push(i)
    }
    data.forEach(item => { data2.push(words[item]) });
    return data2
}


console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))

/* Clever Answer
function anagrams(word, words) {
  word = word.split('').sort().join('');
  return words.filter(function(v) {return word == v.split('').sort().join('');});
}
*/