/**
 * Created by gimin on 4/18/17.
 */


function sumFibs(num) {
    let fib0 = 0,
        fib1 = 1,
        fib  = 1,
        sum  = 0
    while (fib <= num) {
        if (fib % 2) sum += fib1
        fib = fib0 + fib1
        fib1 += fib0
        fib0 = fib1 - fib0
    }
    return sum
}


console.log(
    sumFibs(1),
// should return a number.
    sumFibs(1000),
// should return 1785.
    sumFibs(4000000),
// should return 4613732.
    sumFibs(4),
// should return 5.
    sumFibs(75024),
// should return 60696.
    sumFibs(75025)
// should return 135721.
)