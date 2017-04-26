/**
 * Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
    var sumTwoAnd = addTogether(2);
    sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined.
 * 
 */
function addTogether() {
    let [x, y] = [...arguments]

    if (x && !Number.isInteger(x)) return undefined
    if ((x || x == 0) && (y || y == 0)) return f(y)
    if (x && !y) return f

    function f(y) {
        if (y && !Number.isInteger(y)) return undefined
        return x + y
    }
}

console.log(
    addTogether(2, 3),
    //should return 5.
    addTogether(2)(3),
    // should return 5.
    addTogether("http://bit.ly/IqT6zt"),
    // should return undefined.
    addTogether(2, "3"),
    // should return undefined.
    addTogether(2)([3])
    // should return undefined.
)