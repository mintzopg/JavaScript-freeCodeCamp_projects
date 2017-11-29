/**
 * Return a new array that transforms the element's average altitude into their orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
 */

//      a = 35873.553 km + 6367.4447 km
//    T = 2*pi* sqrt( (a ^ 3) / (GM) )  secs


function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;

    let out = [];

    function calcT(avgAlt) {
        return Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + avgAlt, 3) / GM));
    }

    for (let i = 0; i < arr.length; i++) {
        out.push({ name: arr[i].name, orbitalPeriod: calcT(arr[i].avgAlt) });
    }
    return out;
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));

console.log(
    orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }])
);
// should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].
