const a = 5
const b = 11
let objectSign = {
        ['+']: a+b,
        ['-']: a-b,
        ['*']: a*b,
        ['/']: a/b,
    };
    const sign = '*'
console.log(objectSign[sign])

const summ = 5 + objectSign[sign] + 7
console.log(summ, 5)
