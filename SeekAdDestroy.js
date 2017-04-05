// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.


function destroyer(arr) {
    let arr1 = arguments[0]
    let arr2 = []
    for (let i = 1; i < arguments.length; i++) {
        arr2.push(arguments[i])
    }

    function remove(arr1, arr2) {
        let val = arr2.pop()
        if (val === undefined) return arr1
        return remove(arr1.filter(x => x !== val), arr2)
    }

    return remove(arr1, arr2)
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3), // should return [1, 1].
    destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3), // should return [1, 5, 1].
    destroyer([3, 5, 1, 2, 2], 2, 3, 5), // should return [1].
    destroyer([2, 3, 2, 3], 2, 3), // should return [].
    destroyer(["tree", "hamburger", 53], "tree", 53) // should return ["hamburger"].
)