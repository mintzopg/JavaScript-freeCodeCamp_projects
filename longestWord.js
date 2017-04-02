/**
 * Find the longest word in a string. Can return either the word or the length of it
 * @param str 
 */

function findLongestWord(str, n = 1) { // n <> 1, to find the nth longest word
    var array = str.split(' ')

    var a = []
    for (let i = 0; i < array.length; i++) {
        a.push({
            index: i,
            value: array[i],
            size: array[i].length
        });
    }

    return a.sort(function(a, b) {
        if (a.size - b.size === 0) return a.index - b.index;
        return (b.size - a.size);
    })[n - 1].value; // add ".length"   if you want the length
}

var str = 'The quick brown fox jumped over the lazy dog'
findLongestWord(str) // jumped
findLongestWord(str, 2) // quick