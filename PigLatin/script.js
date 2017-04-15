function translatePigLatin(str) {
    let re1 = new RegExp(/^[^aeiou]*/gi) // check for consonant or cluster of them
    let re2 = new RegExp(/^[aeiou]/gi) // check for vowel

    if (str.match(re1).toString().length > 0) {
        // str starts with consonant
        str = str.substring(str.match(re1).toString().length) + str.match(re1).toString() + 'ay'
    } else if (str.match(re2).toString().length > 0) {
        // str starts with vowel
        str += 'way'
    }

    return str;
}

console.log(
    translatePigLatin('california'), // should return 'aliforniacay'.
    translatePigLatin('paragraphs'), // should return 'aragraphspay'.
    translatePigLatin('glove'), // should return 'oveglay'.
    translatePigLatin('algorithm'), // should return 'algorithmway'.
    translatePigLatin('eight') // should return 'eightway'.
)