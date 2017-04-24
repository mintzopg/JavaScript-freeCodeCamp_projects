/**
 * Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
 * 
 * @param {Array[Object]} collection 
 * @param {String} pre 
 * @returns Boolean
 */
function truthCheck(collection, pre) {
    // Is everyone being true?
    for (let obj of collection) {
        var result = false
        for (let k of Object.keys(obj)) {
            if (k === pre && Boolean(obj[k])) result = true
        }
        if (!result) break
    }
    return result
}


console.log(
    truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"),
    // should return true.
    truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"),
    // should return false.
    truthCheck([{ "user": "Tinky-Winky", "sex": "male", "age": 0 }, { "user": "Dipsy", "sex": "male", "age": 3 }, { "user": "Laa-Laa", "sex": "female", "age": 5 }, { "user": "Po", "sex": "female", "age": 4 }], "age"),
    // should return false.
    truthCheck([{ "name": "Pete", "onBoat": true }, { "name": "Repeat", "onBoat": true }, { "name": "FastFoward", "onBoat": null }], "onBoat"),
    // should return false
    truthCheck([{ "name": "Pete", "onBoat": true }, { "name": "Repeat", "onBoat": true, "alias": "Repete" }, { "name": "FastFoward", "onBoat": true }], "onBoat"),
    // should return true
    truthCheck([{ "single": "yes" }], "single"),
    // should return true
    truthCheck([{ "single": "" }, { "single": "double" }], "single"),
    // should return false
    truthCheck([{ "single": "double" }, { "single": undefined }], "single"),
    // should return false
    truthCheck([{ "single": "double" }, { "single": NaN }], "single")
    // should return false
)