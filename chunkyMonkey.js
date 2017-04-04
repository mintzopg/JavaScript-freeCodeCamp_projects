/**
 * Write a function that splits an array into groups the length of size,
 * and returns them as a 2-dimensional array
 * @param {arr} 
 * @param {size} 
 */

// function chunkArrayInGroups_(arr, size) {
//     var out = out || []
//     if (arr.length <= size) {
//         out.push(arr)
//     } else {
//         out.push(arr.slice(0, size))
//         chunkArrayInGroups(arr.slice(size), size)
//     }
//     return out
// }

function chunkArrayInGroups(arr, size) {
    var out = []

    function fx(arr, size) {
        if (arr.length <= size) out.push(arr)
        else {
            out.push(arr.slice(0, size))
            fx(arr.slice(size), size)
        }
        return out
    }
    return fx(arr, size)
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