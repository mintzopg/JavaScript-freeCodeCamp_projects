/**
 * Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
 * 
 * @param {any} arr1 
 * @param {any} arr2 
 * @returns new array
 */
function diffArray(arr1, arr2) {
    let newArr = [],
        idx
    arr1.forEach(i => { // iterate over arr1
            if (!arr2.includes(i)) newArr.push(i) // if value not in arr2 keep it
            else { // if value in arr2, remove it from arr2
                idx = arr2.indexOf(i)
                arr2.splice(idx, 1)
            }
        })
        // if ny elements are left in arr2 after the loop concataneate them in newArr
    newArr = [...newArr, ...arr2]
    return newArr
}

console.log(
    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]), // [4]
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"], // should return ["pink wool"].
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"], // should return ["diorite", "pink wool"].
    ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"], // should return [].
    [1, 2, 3, 5], [1, 2, 3, 4, 5], // should return [4].
    [1, "calf", 3, "piglet"], [1, "calf", 3, 4], // should return ["piglet", 4].
    [], ["snuffleupagus", "cookie monster", "elmo"], //  should return ["snuffleupagus", "cookie monster", "elmo"].
    [1, "calf", 3, "piglet"], [7, "filly"] // should return [1, "calf", 3, "piglet", 7, "filly"].
)