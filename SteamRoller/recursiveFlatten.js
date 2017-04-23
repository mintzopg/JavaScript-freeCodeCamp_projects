//The classical recursive way is based on a function calling itself if the i element in the array that we are looping through is also an array.

function flattenArray(arr, flatArr = []) {
    if (!Array.isArray(arr))
        return [arr]
    for (let i = 0; i < arr.length; i++) {
        flatArr = flatArr.concat(flattenArray(arr[i]))
    }
    return flatArr
}

console.log(
    flattenArray([1, [2, [3]],
        [4]
    ])
)