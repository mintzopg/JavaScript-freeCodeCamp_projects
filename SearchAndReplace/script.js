function myReplace(str, before, after) {
    const re = new RegExp(before)

    let func = (before, after) => {
        let c = before.charAt(0)
        if (c === c.toUpperCase()) {
            // if before starts with an uppercase letter 
            // -> make after start with uppercase letter also
            // else do it lower case
            return after.charAt(0).toUpperCase() + after.substring(1)
        } else return after.charAt(0).toLowerCase() + after.substring(1)
    }

    return str.replace(re, func(before, after))
}


console.log(
    myReplace('Let us go to the store', 'store', 'mall'),
    // should return 'Let us go to the mall'.
    myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'),
    //  should return 'He is Sitting on the couch'.
    myReplace('This has a spellngi error', 'spellngi', 'spelling'),
    // should return 'This has a spelling error'.
    myReplace('His name is Tom', 'Tom', 'john'),
    // should return 'His name is John'.
    myReplace('Let us get back to more Coding', 'Coding', 'algorithms')
    // should return 'Let us get back to more Algorithms'.
)