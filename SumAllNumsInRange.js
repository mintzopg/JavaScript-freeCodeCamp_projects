function sumAll(arr) {
    let x = Math.min(...arr),
        vec = []
    vec.push(x)
    while (x < Math.max(...arr)) {
        vec.push(++x)
    }
    return vec.reduce(function(sum, i) { return sum + i; }, 0)
}

/*
 prior to using the spread operator to get the max or min using Math.max/min
 we would have to use something like the following 

function getMaxOfArray(arr) {
    return Math.max.apply(null, arr)
}

function getMaxFromArray(arr) {
    return arr.reduce((a, b) => Math.max(a, b), arr[0])
}
*/
console.log(sumAll([-1, 5]))