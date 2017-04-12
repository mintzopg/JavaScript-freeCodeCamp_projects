/**
 * Convert decimal numbers to roman numbers
 * All roman numerals answers should be provided in upper-case.
 * @param {any} num
 * @returns {String}
 */
function convertToRoman(num) {
    if (num == 0) {
        console.log('Looks like the Romans didn\'t know about zero!')
        return
    }
    num = num.toString().split('').reverse() // x = Array of chars with most significant digit at the end
    return  num.reduceRight((acc, i, index) => acc + getRoman(i, index), '')
}

let getRoman = (val, power) => {
    if(power > 3) throw "Sorry no can do for such large numbers. Try something below 10.000"
    // Lay the rules
    if (power == 0) {
        if (val == 4) return 'IV'
        else if (val == 5) return 'V'
        else if (val == 9) return 'IX'
        else {
            if (val < 4) return times(parseInt(val), 'I')
            if (val > 5) return 'V' + times(parseInt(val) - 5, 'I')
        }
    }
    if (power == 1) {
        if (val == 4) return 'XL'
        else if (val == 5) return 'L'
        else if (val == 9) return 'XC'
        else {
            if (val < 4) return times(parseInt(val), 'X')
            if (val > 5) return 'L' + times(parseInt(val) - 5, 'X')
        }
    }
    if (power == 2) {
        if (val == 4) return 'CD'
        else if (val == 5) return 'D'
        else if (val == 9) return 'CM'
        else {
            if (val < 4) return times(parseInt(val), 'C')
            if (val > 5) return 'D' + times(parseInt(val) - 5, 'C')
        }
    }
    if (power >= 3) {
        return times(parseInt(val), 'M')
    }
}


function times(n, char) {
    let x = ''
    for (let i = 0; i < n; i++) {
        x += char
    }
    return x
}


console.log(convertToRoman(642))