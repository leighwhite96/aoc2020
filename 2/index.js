const fs = require('fs');

const data = fs.readFileSync('./input.txt', 'utf8').split('\n');

const getValidCount = (arr, part1) => {
    return arr.reduce((acc, cur) => {
        const info = cur.split(' ');
        const min = parseInt(info[0].split('-')[0]);
        const max = parseInt(info[0].split('-')[1]);
        const char = info[1].split(':')[0];
        const password = info[2];
        
        if (part1) {
            const count = [...password].reduce((acc,cur) => {
                if (cur === char) return acc + 1;
                
                return acc;
            }, 0);
            
            if (count >= min && count <= max) return acc + 1;
            
            return acc;
        }

        let first;
        let second;
        let valid;
        
        if (password[min - 1] === char) first = true;
        if (password[max - 1] === char) second = true;

        if (first || second) valid = true;
        if (first && second) valid = false;

        if (valid) return acc + 1;

        return acc;
    }, 0);
};

console.log('** PART 1 **',getValidCount(data, true))
console.log('** PART 2 **',getValidCount(data, false))