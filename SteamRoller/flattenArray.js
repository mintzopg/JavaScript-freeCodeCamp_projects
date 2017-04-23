/**
 * Flatten a nested array of arbitary length
 * 
 * @param {Array} arr 
 * @returns {Array}
 */
function steamrollArray(arr, flatArr = []) {
    // I'm a steamroller, baby
    if (!Array.isArray(arr))
        return [arr]
    for (let i = 0; i < arr.length; i++) {
        flatArr = flatArr.concat(steamrollArray(arr[i]))
    }
    return flatArr
}

console.log(
    steamrollArray([
        [
            ['a']
        ],
        [
            ['b']
        ]
    ]),
    // should return ['a', 'b'].
    steamrollArray([1, [2],
        [3, [
            [4]
        ]]
    ]),
    // should return [1, 2, 3, 4].
    steamrollArray([1, [],
        [3, [
            [4]
        ]]
    ]),
    // should return [1, 3, 4].
    steamrollArray([1, {},
        [3, [
            [4]
        ]]
    ])
    //  should return [1, {}, 3, 4].
)