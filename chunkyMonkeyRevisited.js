/**
 * Write a function that splits an array into groups the length of size,
 * and returns them as a 2-dimensional array
 * @param {arr} 
 * @param {size} 
 */
// reimplementation using ES6 default parameter to handle the "out"" array
// in the recursion

function chunkArrayInGroups(arr, size, out = []) {
    if (arr.length <= size) out.push(arr)
    else {
        out.push(arr.slice(0, size))
        chunkArrayInGroups(arr.slice(size), size, out)
    }
    return out
}



// Tests
console.log(
    chunkArrayInGroups(['a', 'b', 'c', 'd'], 2), // [['a', 'b'], ['c', 'd']]
    chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3), // [[0, 1, 2], [3, 4, 5]].
    chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2), // [[0, 1], [2, 3], [4, 5]].
    chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4), // [[0, 1, 2, 3], [4, 5]].
    chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3), // [[0, 1, 2], [3, 4, 5], [6]].
    chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4), // [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
    chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) // [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
)