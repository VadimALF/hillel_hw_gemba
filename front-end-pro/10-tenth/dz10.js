const inputName = document.querySelector('#inputName')
const inputSurname = document.querySelector('#inputSurname')
const inputPhone = document.querySelector('#inputPhone')
const btnOneEl = document.querySelector('#btnOne')
const main = document.querySelector('#main')
const TemplateContactList = document.querySelector('#templateContactList').innerHTML


if (confirm('Створити список контактів?')) {
    addContactList()
}
const tbody = document.querySelector('#tbody')

btnOneEl.addEventListener('click', onBtnOneClick)

inputName.addEventListener('click', onInputNameClick)
inputSurname.addEventListener('click', onInputSurnameClick)
inputPhone.addEventListener('click', onInputPhoneClick)


const btnDel = document.querySelector('#btnDel')
const trNew = document.querySelector('#trNew')

function onBtnOneClick () {
    let newName = inputName.value
    let newSurname = inputSurname.value
    let newPhone = inputPhone.value
 
    if (checkValue(newName, newSurname, newPhone)) {
        const htmlRow = creatTableRow(newName, newSurname, newPhone)
        tbody.insertAdjacentHTML('beforeend', htmlRow)
        
    }
    else {
        alert('Заповніть будь ласка форму.\nПоля не повинні бути порожні.\n' +
            'номер телефону 0123456789 неприпустимо')
    }
    clearForm()
}

function onInputNameClick () {
    inputName.style.color = 'black'
    inputName.value = ''
}

function onInputSurnameClick () {
    inputSurname.style.color = 'black'
    inputSurname.value = ''
}

function onInputPhoneClick () {
    inputPhone.style.color = 'red'
    inputPhone.value = ''
}

function checkValue(newName, newSurname, newPhone) {
    if (newName !== '' && newName !== 'first name'
        && newSurname !== '' && newSurname !== 'last name'
        && newPhone !== '' && newPhone !== '0123456789') {
        return true
    }
    return false
}

function creatTableRow(newName, newSurname, newPhone) {
    return `
    <tr id="trNew">
            <td id="tdNameNew">${newName}</td>
            <td id="tdSuameNew">${newSurname}</td>
            <td id="tdPhoneNew"><a href="tel:${newPhone}">${newPhone}</a></td>
            <td id="tdActinsNew"><button id="btnDel">Del</button></td>
        </tr>
    `
}

function clearForm() {
    inputName.style.color = 'gray'
    inputName.value = 'first name'
    inputSurname.style.color = 'gray'
    inputSurname.value = 'last name'
    inputPhone.style.color = 'gray'
    inputPhone.value = '0123456789'
}

function addContactList() {
  main.insertAdjacentHTML ('beforebegin', TemplateContactList)  
}


