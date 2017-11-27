function permAlone(str) {

    // get the permutations
    let p = []; // Array of string permutations
    let a = str.split("");
    let n = str.length;
    permute(a, 0, n - 1);

    return p.filter(s => !strCheck(s)).length;

    function permute(a, l = 0, r) {
        if (l === r) p.push(a.join('')); 
        else {
            for (let i = l; i < r + 1; i++) {
                // swap values
                a[l] = [a[i], a[i] = a[l]][0];
                permute(a, l + 1, r)
                a[l] = [a[i], a[i] = a[l]][0]; // backtrack
            }
        }
    }

    function strCheck(string) { // check a string for non-consecutive same chars
        let arr = string.split('');
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] === arr[i + 1]) {
                return true;
            }
        }
        return false;
    }

}

///////////////////////  TESTS  //////////////////////////
console.log(permAlone('aab'));
console.log(permAlone('aaa'));
console.log(permAlone('aabb'));
console.log(permAlone('abcdefa'));
console.log(permAlone('abfdefa'));
console.log(permAlone('zzzzzzzz'));
console.log(permAlone('a'));
console.log(permAlone('aaab'));
console.log(permAlone('aaabb'));
