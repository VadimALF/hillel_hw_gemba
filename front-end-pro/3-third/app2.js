let sign = enterSign()
let numberA = enterNumber('A')
let numberB = enterNumber('B')
alert('number A = ' + numberA + '\n sign = ' + sign + '\nnumber B =' + numberB)
//let answer = calc(numberA, numberB , sign)
printAnswer(numberA, numberB , sign)


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
    alert ('isNumber \n\n number = "' + number + '" / Number(number) ="' + Number(number) + '" type = "' + typeof Number(number) + '"   trueSNn = "' + (String(Number(number)) === 'NaN'))
    if (typeof Number(number) === 'number' && String(Number(number)) !== 'NaN' && number !== 'null') {
        return(Number(number))
    }
    else {
       alert('You are wrong, you entered \n"' + number + '"\n This is not a number.\n Reload the page.')        
        throw new Error();
    }
}

function printAnswer(numberA, numberB, sign) {
    if (numberB < 0 && sign === '-') {
        numberB = '(' + numberB + ')'
        alert(numberB)
        alert(`${numberA} ${sign} ${numberB} = ` + eval(numberA + sign + numberB))
    }
    else {
        alert(`${numberA} ${sign} ${numberB} = ` + eval(numberA + sign + numberB))
    }
}