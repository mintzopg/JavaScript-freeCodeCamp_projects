/*
 ----- Sieve of Eratoshenes ------
 Given integer n  > 1, this algorithm produces all primes not greater than n.
 It includes a common optimization, which is to start enumerating the multiples of each prime i from
 i². The time complexity of this algorithm is O(n*log(log(n)))
 
 ----------------------- Pseudocode --------------------
 Input: an integer n > 1
 
 Let A be an array of Boolean values, indexed by integers 2 to n,
 initially all set to true.
 
 for i = 2, 3, 4, ..., not exceeding √n:
 if A[i] is true:
 for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n :
 A[j] := false
 
 Output: all i such that A[i] is true.
 ----------------------------------------------------------
 */

function primes(n) {
    if (n <= 1) return [];
    
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
                A[j] = false;
                k++;
            }
        }
    }
    // Output: all primes are the indexes i such that A[i] is true
    for (i = 2; i < n; i++) {
        if (A[i] === true) {
            out.push(i);
        }
    }
    // Output is a list containg all primes < n
    return out;
}
