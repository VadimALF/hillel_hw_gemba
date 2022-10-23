let number
while (number !== 167) {
  number = isReallyNumber(prompt('Введите целое число от 0 до 170', 170))

  switch (number) {
    case 0:
      alert('В математике, в качестве соглашения, принимается \n\n 0! = ' +
        factorial(number))
      break
    case 1: alert('Тут всё просто: \n\n' + number + '! = '
      + factorial(number) + '\n \u{1F60D}')
      break
    case 2: alert('Это же очевидно: \n\n' + number + '! = '
      + factorial(number) + '\n \u{1F60D}')
      break
    case 3: alert('Да ладно, юзать комп, чтобы посчитать факториал трёх?\n' +
    'Ну ок, ради Бога: \n\n' + number + '! = ' + factorial(number) + '\n \u{1F60D}')
      break
    case 4: alert('Ну, такое можно и в уме посчитать: \n\n' + number + '! = '
      + factorial(number) + '\n \u{1F60D}')
      break
    case 5: alert('Не надоело?\n\n' + number + '! = ' + factorial(number) +
      '\n\n Из этого цикла можно выйти, если ввести секретное число\n\n' +
      '     \u{1F60D}')
      break
    case 21: alert('21 - это самое большое число, факториал которого записан ' +
      'без использования 10\u207F \n\n' + number + '! = ' + factorial(number))
      break
    case 167: alert('Ура!!!! \n\nНарешті Ви знайшли таємне число \n\n' +
      number + '! = ' + factorial(number) + '\n\n \u24CA\u24B6 Слава Україні!!! \nНа все добре!')
      break
    case 170: alert('170 - это самое большое число, факториал которого может ' +
      'посчитать Ваш браузер \n\n' + number + '! = ' + factorial(number))
      break
    default: alert(number + '! = ' + factorial(number) + '\n \u{1F60D}')
  }
}

function isReallyNumber(isNumber) {
  if (isNumber !== null) {
    isNumber = isNumber.replace(/,/g, '\.'),
    isNumber = isNumber.replace(/ /g, '')
  }
  while (
    !(typeof Number(isNumber) === 'number' &&
      String(Number(isNumber)) !== 'NaN' &&
      isNumber !== null &&
      isNumber.replace(/ /g, '') !== '' &&
      Number(isNumber) >= 0 &&
      Number(isNumber) <= 170 &&
      Number.isInteger(Number(isNumber)))
  )
  {
    isNumber = prompt('\u{1F602}\nYou are wrong, you entered \n"' + isNumber +
      '"\n It is an illiquid number.\n Eneter integer from 0 to 170')
    if (isNumber !== null) {
      isNumber = isNumber.replace(/,/g, '\.'),
      isNumber = isNumber.replace(/ /g, '')
    }
  }
  isNumber = delZero(isNumber)
  return isNumber
}

function delZero(NumberWithoutExtra) {
  if (NumberWithoutExtra[0] === '+') {
    NumberWithoutExtra = NumberWithoutExtra.slice(1, 101)
  }
  if (NumberWithoutExtra.slice(0, 3) === '-00') { 
      NumberWithoutExtra = NumberWithoutExtra.slice(1, 100)
    while (NumberWithoutExtra[0] === '0' && NumberWithoutExtra[1] !== '.' &&
      NumberWithoutExtra.length > 1)
    {
      NumberWithoutExtra = NumberWithoutExtra.slice(1, 100)
    }
    NumberWithoutExtra = '-' + NumberWithoutExtra
  }
  else if (NumberWithoutExtra.slice(0, 2) === '00') {
    while (NumberWithoutExtra[0] === '0' && NumberWithoutExtra.length > 1 &&
      NumberWithoutExtra[1] !== '.')
    {
      NumberWithoutExtra = NumberWithoutExtra.slice(1, 100)
    }
  }
  NumberWithoutExtra = NumberWithoutExtra.slice(0, 50)
  return Number(NumberWithoutExtra)
}

function factorial(i) {
  return (i === 0) ? 1 : i * factorial(--i)
}

