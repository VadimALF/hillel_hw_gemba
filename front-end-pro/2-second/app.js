let enterSign = prompt('Enter only one of these characters:\n  +  -  /  *', '-')
isSign(enterSign)
alert ('You enterd sign "' + enterSign + '"')
let numberA = prompt('Enter any number, as number A \n(we will take only the first 50 characters, and then remove all the first and last spaces)', '3.1415926')
let numberB = 0
let negativ
numberA = isNumber(numberA, 1)
alert ('You enterd numberA "' + numberA + '"')
if (enterSign === '/') { // Enter numberB (Is sign = "/" or no)
    numberB = prompt('Enter any number, other than zero, as number B', '3.1415926')
    numberB = isZeroB (numberB, 2)
}
else {
    numberB = prompt('Enter any number, as number B \n(we will take only the first 50 characters, and then remove all the first and last spaces)', '3.1415926')
    numberB = Number(isNumber(numberB, 2))
}

alert ('You enterd numberB "' + numberB)

if (numberB < 0) {
    switch (enterSign) {
        case ('/'):
            negativ = numberA / numberB
            alert(numberA + enterSign + '(' + numberB + ') = ' + negativ)
            break
        case ('*'):
            negativ = numberA * numberB
            alert(numberA + enterSign + '(' + numberB + ') = ' + negativ)
            break
        case ('+'):
            negativ = numberA + numberB
            alert(numberA + enterSign + '(' + numberB + ') = ' + negativ)
            break
        case ('-'):
            negativ = numberA - numberB
            alert(numberA + enterSign + '(' + numberB + ') = ' + negativ)
            break
        default:
            negativ = (-1) * numberB
            alert('negativ =' + negativ + ' ' + (numberB < 0))
    }
}
else {
    switch (enterSign) {
        case ('/'):
            negativ = numberA / numberB
            alert(numberA + enterSign + numberB + ' = ' + negativ)
            break
        case ('*'):
            negativ = numberA * numberB
            alert(numberA + enterSign + numberB + ' = ' + negativ)
            break
        case ('+'):
            negativ = numberA + numberB
            alert(numberA + enterSign + numberB + ' = ' + negativ)
            break
        case ('-'):
            negativ = numberA - numberB
            alert(numberA + enterSign + numberB + ' = ' + negativ)
            break
        
        default:
            negativ = (-1) * numberB
            alert('negativ =' + negativ + ' ' + (numberB < 0))
    }
}

// // FUNCTION

function isSign(sign) { // Validation correct sign
    if (sign === '+' || sign === '-' || sign === '*' || sign === '/') {
        enterSign = sign
    }
    else {
        sign = prompt('You are wrong, you entered\n"' + sign + '"\n This is not sign.\n Please enter only one of these characters: \n + -  /  *', '-')
        isSign(sign, 17) // If this is not a sign, enter the sign again
    }
}

function isNumber(anyNumber, ab) { // Validation correct number
    anyNumber = isNull(anyNumber, ab)
    anyNumber = delZeroDelSpace (anyNumber)
    while (isNaN(Number(anyNumber)) || anyNumber === '' || anyNumber.replace(/ /g, '') === '') { // exception "string"
        if (ab === 1) {  // exception "string" for A
            anyNumber = prompt('You are mistaken.\n You entered "' + anyNumber + '" as number A.\n This is not a number.\n Enter any number, as number A, again, for example: -7', '-7')
            anyNumber = isNull(anyNumber, ab)
            anyNumber = delZeroDelSpace (anyNumber)
        }
        else {           // exception "string" for B
            anyNumber = prompt('You are mistaken.\n You entered "' + anyNumber + '" as number B.\n This is not a number.\n Enter any number, as number B, again, for example: -3.14', '-3.14')
            anyNumber = isNull(anyNumber, ab)
            anyNumber = delZeroDelSpace(anyNumber)
        }
    }
return anyNumber
}

function isZeroB(zeroB, ab) { // Validation correct numberB if sign = "/"
    zeroB = isNull(zeroB, ab)
    zeroB = delZeroDelSpace (zeroB)
    while (isNaN(Number(zeroB)) || zeroB === '' || zeroB === '0' || zeroB === '-0') {    // exception null
        let q = zeroB === ''
        let nol = zeroB === '0'
        let notNol = zeroB === '-0'
        zeroB = prompt('You are mistaken.\n You entered ' + zeroB + ' as number B.\n Enter any number, other than zero, as number B, again, for example: 23', '23')
        zeroB = isNull(zeroB, 2)
        zeroB = delZeroDelSpace(zeroB)
    }
    return zeroB
}

function isNull(numberNull, ba) {
    while (numberNull === null) {    // exception null
        if (ba === 1) {          // exception null for A
            numberNull = prompt('You are mistaken.\n You entered "' + numberNull + '" as number A.\n This is not a number.\n Enter any number, as number A, again, for example: 0', '0')
        }
        else {                    // exception null for B
            numberNull = prompt('You are mistaken.\n You entered "' + numberNull + '" as number B.\n This is not a number.\n Enter any number, as number B, again, for example: -0', '-0')
        }
    }
    return numberNull
}

function delZeroDelSpace(NumberWithoutExtra) { // Remove all whitespace characters and all first zeros
    NumberWithoutExtra = NumberWithoutExtra.slice(0, 49) // first 50 characters
    NumberWithoutExtra = NumberWithoutExtra.replace(/ /g, '') // remove spaces
    if (NumberWithoutExtra.slice(0, 2) === '-00') { // remove zeros 
        NumberWithoutExtra = NumberWithoutExtra.slice(1, 49)
        while (NumberWithoutExtra[0] === '0' && NumberWithoutExtra[1] !== '.' && NumberWithoutExtra[1] !== ' ' && NumberWithoutExtra.length > 1) {
            NumberWithoutExtra = NumberWithoutExtra.slice(1, 49)
        }
        NumberWithoutExtra = '-' + NumberWithoutExtra
    }
    else if (NumberWithoutExtra.slice(0, 2) === '00') {
        while (NumberWithoutExtra[0] === '0' && NumberWithoutExtra.length > 1) {
            NumberWithoutExtra = NumberWithoutExtra.slice(1, 49)
        }
    }
    return NumberWithoutExtra
}
