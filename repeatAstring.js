/* Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number. */

function repeatStringNumTimes(str, num) {
    if (num <= 0) return ""
    return str.concat(repeatStringNumTimes(str, num - 1))
}

console.log(
    repeatStringNumTimes("*", 3), // "***"
    repeatStringNumTimes("abc", 3), // "abcabcabc"
    repeatStringNumTimes("abc", 4), // "abcabcabcabc"
    repeatStringNumTimes("abc", 1), // "abc"
    repeatStringNumTimes("*", 8), // "********"
    repeatStringNumTimes("abc", -2) // ""
)