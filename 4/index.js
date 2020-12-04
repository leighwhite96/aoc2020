const fs = require('fs');

const data = fs.readFileSync('./input.txt', 'utf8').split('\n\n');

const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid'];

const ecls = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

const validators = {
    'byr': x => x >= 1920 && x <= 2002,
    'iyr': x => x  >= 2010 && x <= 2020,
    'eyr': x => x >= 2020 && x <= 2030,
    'hgt': x => {
        if (x.includes('cm')) {
            const height = parseInt(x.split('cm')[0]);
            
            return height >= 150 && height <= 193;
        }
        
        const height = parseInt(x.split('in')[0]);
            
        return height >= 59 && height <= 76;
    },
    'hcl': x => /^#[0-9a-f]{6}$/i.test(x),
    'ecl': x => ecls.includes(x),
    'pid': x => x.length === 9,
    'cid': () => true,
}

const check = (passport) => {
    const passportValues = passport.split(' ').map(x => x.split('\n')).reduce((acc,cur) => ([...acc, ...cur]), []);
    let valid = true;

    passportValues.forEach((key) => {
        const splitVals = key.split(':');
        const isValid = validators[splitVals[0]](splitVals[1])

        if (valid) valid = isValid;
    });

    return valid;
}

const func = arr => {
    return arr.reduce((acc, cur) => {
        let count = 0;
        let cid = false;

        fields.forEach((key) => {
            if (cur.includes(key)) count = count + 1;
            if (cur.includes('cid')) cid = true;
        });

        if (count === 8 || count === 7 && !cid) {
            const isValid = check(cur);

            if (isValid) return acc + 1;
        }

        count = 0;
        cid = false;

        return acc;
    }, 0)
};

console.log(func(data))