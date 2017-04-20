/**
 * Created by gimin on 4/18/17.
 */

/*
 * Sum all the prime numbers up to and including the provided number.
 
 A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
 
 The provided number may not be a prime.*/

function sumPrimes(num) {
    return primes(num + 1).reduce((sum, curr) => sum + curr, 0)
    
    function primes(n) {
        if (n <= 1) return []
        
        let A = Array(2 + n).fill(true) // array of booleans indexed 2 to n
        let out = []
        let i
        
        // --- Algorithm ---
        for (i = 2; i < Math.sqrt(n); i++) {
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
        for (i = 2; i < n; i++) {
            if (A[i] === true) {
                out.push(i)
            }
        }
        // Output is a list containing all primes < n
        return out
    }
}

console.log(
    sumPrimes(10),
    // should return 17
    sumPrimes(977)
    // should return 73156
)
