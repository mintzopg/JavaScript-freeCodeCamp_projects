/**
 * Sieve of Eratosphenes algorithm to compute primes
 * 
 * @param {Integer} n 
 * @returns Array of prime numbers < n
 */
function primes(n) {
    if (n <= 1) return []

    let A = new Array(2 + n).fill(true) // array of booleans indexed 2 to n
    let out = []
    let i

    // --- Algorithm ---
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (A[i] === true) {
            let k = 0,
                j = Math.pow(i, 2) + k * i
            while (j < n) {
                j = Math.pow(i, 2) + k * i;
                A[j] = false
                k++
            }
        }
    }
    // Output: all primes are the indexes i such that A[i] is true
    for (let i = 2; i < n; i++) {
        if (A[i] === true) {
            out.push(i)
        }
    }
    // Output is a list containing all primes < n
    return out
}

/**
 * Find the prime factors of integer num
 * 
 * @param {Int} num > 0
 * @returns Array of prime Factors
 */
function primeFactors(num) {
    if (num < 1) throw "Not a valid number entered!"
    let primesVec = primes(num + 1) // get all primes <= num
    let v = []

    // using trial division
    while (true) {
        for (let i of primesVec) {
            if (num % i === 0) {
                v.push(i)
                num = num / i
                break
            }
        }
        if (num === 1) break
    }
    return v
}

/**
 * Return the greatest common divisor of a and b (a, b > =)
 * 
 * @param {Int} x
 * @param {Int} y
 * @returns {Int} gcd
 */
function gcd(x, y) { // Implements The Euclidean Algorithm
    if (y === 0)
        return x
    else
        return gcd(y, x % y)
}

/**
 * Least Common Multiple of integers a, b
 * 
 * @param {Int} a 
 * @param {Int} b 
 * @returns{ Int} lcm
 */
function lcm(a, b) {
    let a_ = primeFactors(a),
        b_ = primeFactors(b),
        lcm_ = []

    //take the product of the sets of primes with the highest exponent value among a and b.
    for (let n of a_) {
        lcm_.push(n)
        let i = b_.indexOf(n)
        if (i > -1) b_.splice(i, 1)
    }
    for (let n of b_)
        lcm_.push(n)

    // return the LCM
    return lcm_.reduce((prod, x) => prod * x, 1)
}


/**
 * Least Common Multiple of integers a, b
 * ... using the greatest common divisor method
 * 
 * @param {Int} a 
 * @param {Int} b 
 * @returns{ Int} lcm
 */
function lcmByGCD(a, b) {
    // LCM(a,b) = (a*b)/GCD(a,b)
    return (a * b) / gcd(a, b)
}



// console.log(
//     // primeFactors(24)
//     `Least common multiple (LCM) of 12, 30 is: ${lcm(12, 30)} \nLCM of 24, 300 is: ${lcm(24, 300)}`
// )

module.exports.primes = primes
module.exports.primeFactors = primeFactors
module.exports.lcm = lcm
module.exports.lcmByGCD = lcmByGCD