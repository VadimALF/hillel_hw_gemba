let firstName = prompt('insert your Name:', 'John')
if (firstName === null) {
    alert('Heallo Nameless Person! How are you?')
}
else if (firstName === '') {
    alert('Heallo Nameless Person! How are you?')
}
else if (firstName === 'Vadim') {
    alert('Привет тёзка, как дела?')
}
else { alert('Heallo ' + firstName + '! How are you?') }