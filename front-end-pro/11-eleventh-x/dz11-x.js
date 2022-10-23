const inputName = document.querySelector('#inputName')
const inputSurname = document.querySelector('#inputSurname')
const inputPhone = document.querySelector('#inputPhone')
const btnOneEl = document.querySelector('#btnOne')
const main = document.querySelector('#main')
const TemplateContactList = document.querySelector('#templateContactList').innerHTML
const tbody = document.querySelector('#tbody')

btnOneEl.addEventListener('click', onBtnOneClick)

// inputName.addEventListener('click', onInputNameClick)
// inputSurname.addEventListener('click', onInputSurnameClick)
// inputPhone.addEventListener('click', onInputPhoneClick)


const btnDel = document.querySelector('#btnDel')
const trNew = document.querySelector('#trNew')

function onBtnOneClick() {
    const contact = getContact()
    if (isContactValid(contact)) {
      alert('Заповніть будь ласка форму.\nПоля не повинні бути порожні.\n' +
             'номер телефону 0123456789 неприпустимо')  
    }
    }
    // let newName = inputName.value
    // let newSurname = inputSurname.value
    // let newPhone = inputPhone.value
 
    // if (checkValue(newName, newSurname, newPhone)) {
    //     const htmlRow = creatTableRow(newName, newSurname, newPhone)
    //     tbody.insertAdjacentHTML('beforeend', htmlRow)
        
    // }
    // else {
    //     alert('Заповніть будь ласка форму.\nПоля не повинні бути порожні.\n' +
    //         'номер телефону 0123456789 неприпустимо')
    // }
    // clearForm()
//}

function getContact() {
    const contact = {}
    for (const { name, value } of inputs) {
        contact[name] = value
    }
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

function isContactValid({name, surname, phone}) {
        return name && surname && phone
}

function creatTableRow(newName, newSurname, newPhone) {
    const todoRowTemplate = todoRowTemplate('#document.querySelector')
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


