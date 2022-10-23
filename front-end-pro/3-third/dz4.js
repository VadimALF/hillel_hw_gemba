const signs = ['+', '-', '/', '*']
let sign = enterSign('+', signs)
let numberOfNumbers = enterVolue()
let numbers = []
enterNumbers(numbers, numberOfNumbers)
let equation = printEquation(numbers, sign, numberOfNumbers)
let result = calculator (numbers, sign)
alert('For eval: ' + equation + ' = ' + eval(equation) + '\n\nFor calc: ' + equation + ' = ' + result)




function enterSign(sign, signs) {
    return isSign(prompt('Enter only one of these characters:\n' + signs.join('    '), '+'), signs)
}

function isSign(sign, signs) {
    while (!(sign === '+' || sign === '-' || sign === '*' || sign === '/')) {
        sign = prompt('You are wrong, you entered\n"' + signs + '"\n This is not a sign.\n Try again.\nEnter only one of these characters:\n' + signs.join('    '), '/')
    }    return sign
    }

function enterVolue(volue) {
    volue = prompt('Okay, finally you entered "' + sign + '" this is a sign.\n Now enter the number of numbers as 2, 3 or 4', '3')
    while (volue !== '2' && volue !== '3' && volue !== '4') {
        volue = prompt('You entered "' + volue + '" it is not "2", not "3" and not "4".\n Try again.', '4')
    }
        return volue
}
    
function enterNumbers(numb, N) {
    numb
    let i = 0
    while (i < N) {
        numb[i++] = isReallyNumber(prompt('Eneter number №' + i), i)
    }
    return [numb]
}

function isReallyNumber(isNumber, i) {
    i--
    isNumber !== null ? (isNumber = isNumber.replace(/,/g, '\.'),
        isNumber = isNumber.replace(/ /g, '')
    ) : (
        isNumber = isNumber)
    while (!(typeof Number(isNumber) === 'number' && String(Number(isNumber)) !== 'NaN' && isNumber !== null && isNumber.replace(/ /g, '') !== '')) {
        isNumber = prompt('You are wrong, you entered \n"' + isNumber + '"\n This is not a number.\n Eneter number №' + (i + 1))
        isNumber !== null ? (isNumber = isNumber.replace(/,/g, '\.'),
            isNumber = isNumber.replace(/ /g, '')
        ) : (
            isNumber = null)
    }
    isNumber = delZero(isNumber)
    return isNumber
}

function delZero(NumberWithoutExtra) {
    NumberWithoutExtra[0] === '+' ? NumberWithoutExtra = NumberWithoutExtra.slice(1, 101)
        :
        NumberWithoutExtra = NumberWithoutExtra.slice(0, 100)
    if (NumberWithoutExtra.slice(0, 3) === '-00') { 
        NumberWithoutExtra = NumberWithoutExtra.slice(1, 100)
        while (NumberWithoutExtra[0] === '0' && NumberWithoutExtra[1] !== '.' && NumberWithoutExtra.length > 1) {
            NumberWithoutExtra = NumberWithoutExtra.slice(1, 100)
        }
        NumberWithoutExtra = '-' + NumberWithoutExtra
    }
    else if (NumberWithoutExtra.slice(0, 2) === '00') {
        while (NumberWithoutExtra[0] === '0' && NumberWithoutExtra.length > 1 && NumberWithoutExtra[1] !== '.') {
            NumberWithoutExtra = NumberWithoutExtra.slice(1, 100)
        }
    }
    NumberWithoutExtra = NumberWithoutExtra.slice(0, 50)
    return Number(NumberWithoutExtra)
}

function calculator(numbers, sign) {
    let calc = {
        ['+']: numbers[0],
        ['-']: numbers[0],
        ['/']: numbers[0],
        ['*']: numbers[0],
    }
        for (var i = 1; i < numbers.length; i++){
            calc['+'] = calc['+'] + numbers[i]
            calc['-'] = calc['-'] - numbers[i]
            calc['*'] = calc['*'] * numbers[i]
            calc['/'] = calc['/'] / numbers[i]
        }
return calc[sign]
}

function printEquation(numb, sign, numberOfNumbers) {
    let equation = numb[0]
    for (var i = 1; i < numberOfNumbers; i++) {
        numb[i] < 0 ? equation = equation + ' ' + sign + ' (' + numb[i] + ')' :
                      equation = equation + ' ' + sign + ' ' + numb[i]
    }
    return equation
}