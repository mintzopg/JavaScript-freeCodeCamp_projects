function checkCashRegister(price, cash, cid) {
    // Brute force solution is the optimal in this situation where cid is known and fixed

    'useesversion:6';

    let changeMap = new Map(); //this will be returned from the function
    let n = cid.length - 1;
    let change = Math.abs(price - cash);

    let cashInDrawer = cidArray => Number(
        // compute the valid (money units that can be returned i.e. <= change) amount in drawer
        (cidArray.filter(
            item => item[2] <= change)).reduce(
            (acc, coin) => acc + coin[1], 0).toFixed(2)
    );

    const valuesMap = new Map([ // reference of valid money units
        [0.01, "PENNY"],
        [0.05, "NICKEL"],
        [0.10, "DIME"],
        [0.25, "QUARTER"],
        [1, "ONE"],
        [5, "FIVE"],
        [10, "TEN"],
        [20, "TWENTY"],
        [100, "ONE HUNDRED"]
    ]);

    // Find the number of money units per category. This transforms cid as a 2D array
    // ... e.g. [[101, 1.01, 0.01], [41, 2.05, 0.05], ...]
    ((arr) => {
        // Define a constant of money values indexed the same as cid
        const moneyVals = [.01, .05, .1, .25, 1, 5, 10, 20, 100];

        cid.forEach((val, i) => {
            val[0] = Number((val[1] / moneyVals[i]).toFixed(2));
            val.push(moneyVals[i]);
        });
    })(cid);

    // Check boundary conditions
    let c = cashInDrawer(cid);
    if (c < change) return "Insufficient Funds";
    if (c == change) return "Closed";

    // main logic
    while (n >= 0) {
        c = cashInDrawer(cid);
        if (change <= 0) return format(changeMap);

        deduceAmount(cid[n]);
        n = cid.length - 1;
    }

    function deduceAmount(cidItem) {
        // this function mutates the cid array
        if (change <= 0) return;
        // cidItme is an array 1x3 of the form [coinQty, amount, coinValue]
        if (cidItem[1] > 0) { // amount > 0
            if (cidItem[2] <= change) { // coinVal < change
                change = Number((change - cidItem[2]).toFixed(2)); // then change = change - coinVal
                cidItem[0]--; // reduce coinQty by 1
                addToChange(cidItem[2]); // add to change 1 of coinValue
                // and repeat
                if (cidItem[0] == 0) {
                    cid.pop();
                    return;
                } else deduceAmount(cidItem);
            } else { // if coinVal > change
                cid.pop(); // mutate cid array accordingly
            }
        }
    }

    function addToChange(value) {
        // adds the change amounts to the changeMap
        let key = valuesMap.get(value);

        if (changeMap.has(key)) {
            changeMap.set(key, changeMap.get(key) + value);
        } else changeMap.set(key, value);
    }

    function format(map) {
        // transform the changeMap to an array with the specific format asked 
        let iter = map.entries();
        let output = [];
        for (let value of iter) output.push(value);
        return output;
    }
}

// Tests

console.log(
    checkCashRegister(19.50, 20.00, [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.10],
        ["QUARTER", 4.25],
        ["ONE", 90.00],
        ["FIVE", 55.00],
        ["TEN", 20.00],
        ["TWENTY", 60.00],
        ["ONE HUNDRED", 100.00]
    ])
);

console.log(
    checkCashRegister(3.26, 100.00, [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.10],
        ["QUARTER", 4.25],
        ["ONE", 90.00],
        ["FIVE", 55.00],
        ["TEN", 20.00],
        ["TWENTY", 60.00],
        ["ONE HUNDRED", 100.00]
    ])
); // should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]

console.log(
    checkCashRegister(19.50, 20.00, [
        ["PENNY", 0.01],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 1.00],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]
    ]) // should return "Insufficient Funds".
);

console.log(
    checkCashRegister(19.50, 20.00, [
        ["PENNY", 0.50],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]
    ]) // should return "Closed".
);