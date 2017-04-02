/*
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
Note:
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/

function palindrome(str) {
    // remove all punctuation
    // remove any spaces, make all lower case and get the array of strings 
    //    by removing any in word spaces
    // use join('') to get back a whole string
    str = str
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        .trim()
        .toLowerCase()
        .match(/\S+/g).join('')

    // reverse the string
    var reversedStr = str
        .split('')
        .reduceRight((rev, x) => rev.concat(x), '')

    return str === reversedStr
}

// tests
palindrome("eye") // true
palindrome("_eye") // true
palindrome("race car") // true
palindrome("not a palindrome") //false
palindrome("A man, a plan, a canal. Panama") //true
palindrome("never odd or even") //true
palindrome("nope") //false
palindrome("almostomla") //false
palindrome("My age is 0, 0 si ega ym.") //true
palindrome("1 eye for of 1 eye.") //false
palindrome("0_0 (: /-\ :) 0-0") //true
palindrome("five|\_/|four") //false