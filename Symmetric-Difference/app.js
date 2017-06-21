/**
 * Created by gimin on 6/4/17.
 * Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕)
 * of the provided arrays.
 * Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference"
 * of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}).
 * For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements
 * which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). 
 * In the symmetric difference algorithm, you would work through the arrays of numbers in this manner: sym(A, B, C) translates to sym(sym(A, B), C) i.e., the symmetric difference of set A and set B is found first and then, the symmetric difference of the resultant set and set C is found.

    Example: sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) equals [1, 4, 5].
 */

function sym(args) {
    var args = Array.from(arguments); // ES6 transform argumnets object to Array

    return args.reduce((acc, val) => {
        return symdiff(acc, val);
    }, []);
}

function symdiff(arr1, arr2) {
    let arr = [];
    let map = new Map();

    addToMap(arr1, map);
    addToMap(arr2, map);

    // get the symmetric difference and return it
    map.forEach((value, key) => {
        if (value === 1) arr.push(key);
    });

    return arr.sort((a, b) => a - b);

    // function to add to Map an arbitary array. 
    // first reduce mutliple array elements to one e.g [1, 1] reduces to [1]
    function addToMap(arr, map) {
        arr = arr.reduce((acc, val) => {
            if (!acc.includes(val)) acc.push(val);
            return acc;
        }, []);

        // count occurences
        arr.forEach(i => {
            if (map.has(i)) map.set(i, map.get(i) + 1);
            else map.set(i, 1);
        })
        return map;
    }
}

// Testing
console.log(
    sym([1, 2, 3], [5, 2, 1, 4]), // should return [3, 4, 5].
    sym([1, 2, 3], [5, 2, 1, 4]), // should contain only three elements.
    sym([1, 2, 5], [2, 3, 5], [3, 4, 5]), // should return [1, 4, 5]
    sym([1, 2, 5], [2, 3, 5], [3, 4, 5]), // should contain only three elements.
    sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]), // should return [1, 4, 5].
    sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]), // should contain only three elements.
    sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]), // should return [2, 3, 4, 6, 7].
    sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]), // should contain only five elements.
    sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]), // should return [1, 2, 4, 5, 6, 7, 8, 9].
    sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) // should contain only eight elements.
)