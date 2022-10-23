let sign = enterSign()
let numberA = enterNumber('A')
let numberB = enterNumber('B')
let answer = calc(numberA, numberB, sign)
printAnswer(numberA, numberB , sign, answer)

function enterSign(sign) {
    return isSign(prompt('Enter only one of these characters:\n  +  -  /  *', '-'))
}

function isSign(sign) {
    if (sign === '+' || sign === '-' || sign === '*' || sign === '/') {
        return sign
    }
    else {
        alert('You are wrong, you entered\n"' + sign + '"\n This is not a sign.\n Try again\nReload the page.')
        throw new Error();
    }
}
         
function enterNumber(number) {
    return isNumber((prompt('Eneter number ' + number)))
}

function isNumber(number) {
    if (typeof Number(number) === 'number' && String(Number(number)) !== 'NaN' && number !== null && number.replace(/ /g, '') !== '') {
        return(Number(number))
    }
    else {
       alert('You are wrong, you entered \n"' + number + '"\n This is not a number.\n Reload the page.')        
        throw new Error();
    } 
}

function calc (a, b , sign) {
    let objectSign = {
            ['+']: a+b,
            ['-']: a-b,
            ['*']: a*b,
            ['/']: a/b,
    };
    return objectSign[sign]
}
    
function printAnswer(numberA, numberB, sign, answer) {
        alert(`${numberA} ${sign} ${numberB} = ${answer}`)
}