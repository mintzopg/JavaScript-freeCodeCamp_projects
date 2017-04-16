/**
 * Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
 */
function fearNotLetter(str) {
    let missingLetter = str.split('')
        .map(char => char.charCodeAt(0))
        .reduce((prev, curr, i) => {
            if (curr - prev === 1) {
                prev = curr
            }
            else if (curr - prev === 2) {
                prev = String.fromCharCode(prev + 1)
            }
             return prev
        })
    if (typeof missingLetter === 'string') return missingLetter
    else return undefined
}

console.log(
    fearNotLetter("abce"), // should return "d".
    fearNotLetter("abcdefghjklmno"), //  should return "i".
    fearNotLetter("bcd"), //  should return undefined.
    fearNotLetter("yz") // should return undefined.
)