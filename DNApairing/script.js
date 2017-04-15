function pairElement(str) {
    let arr = []
    str.split('').map(i => {
        if (i === 'A') arr.push(['A', 'T'])
        else if (i === 'T') arr.push(['T', 'A'])
        else if (i === 'G') arr.push(['G', 'C'])
        else if (i === 'C') arr.push(['C', 'G'])
    })
    return arr
}


console.log(
    pairElement("ATCGA"), // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
    pairElement("TTGAG"), // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
    pairElement("CTCTA") // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
)