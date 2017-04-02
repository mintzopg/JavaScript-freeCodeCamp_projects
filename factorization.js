/*
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
 */


/**
 * Return the factorail of a number num, using a cache (memoization) 
 * @param {*} num 
 */
function factorialize(num) {
    var cache = {}

    function f(n) {
        var value

        if (n in cache) {
            value = cache[n]
        } else {
            if (n == 0 || n == 1) {
                value = 1
            } else value = n * f(n - 1)
            cache[n] = value
        }
        return value
    }
    return f(num)
}

console.log(
    factorialize(5),
    factorialize(10),
    factorialize(20),
    factorialize(1),
    factorialize(0))