const fs = require('fs');

const data = fs.readFileSync('./input.txt', 'utf8').split('\n');

const func = (arr, isLastPart, multiplier) => {
    // lol
    const repeated = arr.map((x) => `${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}`);

    return repeated.reduce((acc, cur, i) => {
        let n;

        if (isLastPart) {
            if (i % 2 !== 0) return acc;

            n = i / 2;
        } else {
            n = (multiplier * i);
        }


        if (cur[n] === '#') return acc + 1;

        return acc;
    }, 0);
};

let slope1 = func(data, false, 3);
let slope2 = func(data, false, 1);
let slope3 = func(data, false, 5);
let slope4 = func(data, false, 7);
let slope5 = func(data, true);

console.log(slope1 * slope2 * slope3 * slope4 * slope5);