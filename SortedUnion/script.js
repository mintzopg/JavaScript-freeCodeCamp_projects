/**
 * Write a function that takes two or more arrays and returns a new array of unique values in the order of the original
 * provided arrays.
 
 In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
 
 The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
 * Created by gimin on 4/17/17.
 */

function uniteUnique(arr) {
    let newArr = []
    // Unite the arrays passed in as parameters into one array with all elements included from every array.
    for (let i = 0; i < arguments.length; i++) {
        newArr = [...newArr, ...arguments[i]]
    }
    // Now use ES6 Set data structure to easily filter duplicates.
    // Note: Javascript (ECMA2015) sets are iterated in insertion order, so this code preserves the order of the
    // original array.
    return (function (arr) {
        'use strict'
        return [...new Set(arr)]
    })(newArr)
}

// Note that, unlike in python, Javascript (ECMA2015) sets are iterated in insertion order, so this code preserves the
// order of the original array.

console.log(
    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]),
    //should return [1, 3, 2, 5, 4].
    uniteUnique([1, 3, 2], [1, [5]], [2, [4]]),
//should return [1, 3, 2, [5], [4]].
    uniteUnique([1, 2, 3], [5, 2, 1]),
//should return [1, 2, 3, 5].
    uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
//should return [1, 2, 3, 5, 4, 6, 7, 8].
)
