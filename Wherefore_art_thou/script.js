/**
 * Created by gimin on 4/12/17.
 */

function whatIsInAName(collection, source) {
    // What's in a name?
    let arr = [];

    collection.forEach(item => {
        "use strict";
        if (Object.keys(source).reduce((logic, property) =>
                logic && item.hasOwnProperty(property) && item[property] === source[property]
                , true)
        ) arr.push(item)
    })
    return arr;
}

console.log(
    whatIsInAName([{first: "Romeo", last: "Montague"}, {first: "Mercutio", last: null}, {
        first: "Tybalt",
        last: "Capulet"
    }], {last: "Capulet"}),
// should return [{ first: "Tybalt", last: "Capulet" }].
    whatIsInAName([{"a": 1}, {"a": 1}, {"a": 1, "b": 2}], {"a": 1}),
// should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
    whatIsInAName([{"a": 1, "b": 2}, {"a": 1}, {"a": 1, "b": 2, "c": 2}], {"a": 1, "b": 2}),
// should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
    whatIsInAName([{"a": 1, "b": 2}, {"a": 1}, {"a": 1, "b": 2, "c": 2}], {"a": 1, "c": 2})
// should return [{ "a": 1, "b": 2, "c": 2 }].
)