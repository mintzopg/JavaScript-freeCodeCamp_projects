function flattenArray(arr) {
    let array = [];
    while (arr.length) {
        let value = arr.shift();
        if (Array.isArray(value)) {
            // this line preserves the order
            arr = value.concat(arr);
        } else {
            array.push(value);
        }
    }
    return array;
}

console.log(
    flattenArray([1, [2, [3]],
        [4]
    ])
)