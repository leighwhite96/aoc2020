const fs = require('fs');

const data = fs.readFileSync('./input.txt', 'utf8').split('\n');

const findNumbers = arr => {
    let product; 

    for (let i = 0; i < arr.length; i += 1) {
        for (let j = i + 1; j < arr.length; j += 1) {
            for (let k = 0; k < arr.length; k += 1) {
                if (k === i || k === j) break;

                if (parseInt(arr[i]) + parseInt(arr[j]) + parseInt(arr[k]) === 2020) {
                    product = parseInt(arr[i]) * parseInt(arr[j]) * parseInt(arr[k]);
                    
                    break;
                }
            }
        }
    }

    return product;
};

console.log(findNumbers(data));