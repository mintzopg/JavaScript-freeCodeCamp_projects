/**
 * Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all
 * sequential numbers in the range between these parameters.
 
 The range will be an array of two numbers that will not necessarily be in numerical order.
 
 e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
 *
 * @param {Array} arr
 */
function smallestCommons(arr) {
    arr.sort((i, j) => i - j)
    
    // create the range array
    let range = []
    for (let i = arr[0] + 1; i < arr[1]; i++)
        range.push(i)
    
}
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

// Tests
console.log(
    smallestCommons([1, 5]),
    // should return 60.
    smallestCommons([5, 1]),
    // should return 60.
    smallestCommons([1, 13]),
    // should return 360360.
    smallestCommons([23, 18])
    // should return 6056820.
)