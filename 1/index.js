const fs = require('fs');

const data = fs.readFileSync('./input.txt', 'utf8').split('\n');

const findNumbers = arr => {
    const parsedArray = arr.map(num => parseInt(num));
    let product;

    for (let i = 0; i < parsedArray.length; i += 1) {
        for (let j = i + 1; j < parsedArray.length; j += 1) {
            for (let k = 0; k < parsedArray.length; k += 1) {
                if (k === i || k === j) break;

                if (parsedArray[i] + parsedArray[j] + parsedArray[k] === 2020) {
                    product = parsedArray[i] * parsedArray[j] * parsedArray[k];
                    
                    break;
                }
            }
        }
    }

    return product;
};

console.log(findNumbers(data));