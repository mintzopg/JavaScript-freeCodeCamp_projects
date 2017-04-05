/*  One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.   */

function rot13(str) {
    return str
        .toUpperCase()
        .split('')
        .reduce((rev, ch) => rev.concat(cipher(ch)), '')

    function cipher(ch) {
        let code = ch.codePointAt(0)
        if (code < 65 || code > 90) return ch // return character if not a letter
        else if (code < 78) return String.fromCodePoint(ch.codePointAt(0) + 13) // wraps at codepoint 77 -> 'M'
        else return String.fromCodePoint(ch.codePointAt(0) - 13)
    }
}


console.log(
    rot13("SERR PBQR PNZC"), // should decode to "FREE CODE CAMP"
    rot13("SERR CVMMN!"), // should decode to "FREE PIZZA!"
    rot13("SERR YBIR?"), // should decode to "FREE LOVE?"
    rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") // should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
)