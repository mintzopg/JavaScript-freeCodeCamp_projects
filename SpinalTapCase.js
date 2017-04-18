/**
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 * 
 * @param {any} str 
 * @returns {string}
 */
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    // Break consecutive words with a space and trim the added edge spaces
    str = str.replace(/(?=[A-Z]\B)/g, ' ').trim()
        // Remove double spaces introcude from previous step
    str = str.replace(/\s\s/g, ' ')
        // Replace all white spaces and underscores
    str = str.replace(/\W|_\s/g, '-').toLowerCase()

    return str
}

function betterSpinalCase(str) {
    // Create a variable for the white space and underscores.
    var regex = /\s+|_+/g;

    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

    // Replace space and underscore with -
    return str.replace(regex, '-').toLowerCase();
}

console.log(
    spinalCase("This Is Spinal Tap"),
    // should return "this-is-spinal-tap".
    spinalCase("thisIsSpinalTap"),
    // should return "this-is-spinal-tap".
    spinalCase("The_Andy_Griffith_Show"),
    // should return "the-andy-griffith-show".
    spinalCase("Teletubbies say Eh-oh"),
    // should return "teletubbies-say-eh-oh".
    spinalCase("AllThe-small Things")
    // should return "all-the-small-things".
)