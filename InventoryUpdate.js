/* Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item. */


function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    let invMap = new Map();

    for (let i of arr1) invMap.set(i[1], i[0]);
    for (let j of arr2) {
        if (invMap.has(j[1])) {
            invMap.set(j[1], invMap.get(j[1]) + j[0]);
        } else invMap.set(j[1], j[0]);
    }

    let arr = [];
    for (let x of invMap.entries()) arr.push(x);

    // sort in place
    arr.sort(
        (a, b) => {
            if (a[0] > b[0]) return 1;
            else if (a[0] < b[0]) return -1;
            else return 0;
        }
    );
    // reverse
    arrOut = [];
    arr.forEach(i => arrOut.push([i[1], i[0]]));

    return arrOut;

}

// TESTS
// The function updateInventory should return an array.

console.log(updateInventory([
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"]
    ], [
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [67, "Bowling Ball"],
        [7, "Toothpaste"]
    ]).length
    // should return an array with a length of 6.
);

console.log(
    updateInventory([
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"]
    ], [
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [67, "Bowling Ball"],
        [7, "Toothpaste"]
    ])
    // should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]
);

console.log(
    updateInventory([
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"]
    ], [])
    // should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].
);

console.log(
    updateInventory([], [
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [67, "Bowling Ball"],
        [7, "Toothpaste"]
    ])
    // should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].
);

console.log(
    updateInventory([
        [0, "Bowling Ball"],
        [0, "Dirty Sock"],
        [0, "Hair Pin"],
        [0, "Microphone"]
    ], [
        [1, "Hair Pin"],
        [1, "Half-Eaten Apple"],
        [1, "Bowling Ball"],
        [1, "Toothpaste"]
    ])
    // should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].
);
