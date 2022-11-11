'use strict'

const SUBMIT_BUTTON_ID = 'btnSubmit'
const DELETE_BTN_CLASS = 'btnDel'
const EDIT_BTN_CLASS = 'btnEdit'
const CONTACTS_ITEM_SELECTOR = '.contactsItem'

const idInput = document.querySelector('#idInput')
const inputName = document.querySelector('#inputName')
const inputSurname = document.querySelector('#inputSurname')
const inputPhone = document.querySelector('#inputPhone')
const btnSubmitEl = document.querySelector('#btnSubmit')
const contactsForm = document.querySelector('#contactsForm')
let tableContactsList = document.querySelector('#tableContactsList')
let contactsList = []

contactsForm.addEventListener('submit', onContactsFormSubmit)
tableContactsList.addEventListener('click', onContactsListClick)


getContactsList()

function getContactsList() {
    ContactsApi.getList()
        .then(list => contactsList = list)
        .then((contactsList) => {
            renderContactsList(contactsList)
        })
        .catch(showError)
}

function renderContactsList(contactsList) {
  const html = contactsList.map(generateContactsItemHTML).join('');
  tableContactsList.innerHTML = html;
}

function generateContactsItemHTML(contacts) {
  return `
    <tr class="contactsItem" data-id="${contacts.id}">
            <td class="tdIdNew">${contacts.id}</td>
            <td class="tdNameNew">${contacts.firstName}</td>
            <td class="tdSuameNew">${contacts.lastName}</td>
            <td class="tdPhoneNew"><a href="tel:${contacts.phone}">${contacts.phone}</a></td>
            <td class="tdEditBtn"><button class="btnEdit">Edit</button></td>
            <td class="tdDelBtn"><button class="btnDel">Del</button></td>
        </tr>
  `
}

function showError(error) {
  alert(error.message);
}

function onContactsFormSubmit(e) {
    e.preventDefault()

    const contacts = getContacts()
    let contactsOut = {
        firstName: inputName.value,
        lastName: inputSurname.value,
        phone: inputPhone.value,
        id: idInput.value
    }
    idInput.value = ''
    if (checkValue(contactsOut)) {
        saveContacts(contactsOut)
    }
    else {
        alert('Заповніть будь ласка форму.\nПоля не повинні бути порожні.\n' +
            'номер телефону 0123456789 неприпустимо')
    }
    contactsForm.reset()
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

function checkValue(contactsOut) {
    return (contactsOut.firstName !== ''
        && contactsOut.lastName !== ''
        && contactsOut.phone !== '')
}

function onContactsListClick(e){
  const contactsEl = getContactsEl(e.target);
  const id = getContactsId(contactsEl);
  const contacts = contactsList.find(contactsItem => contactsItem.id === id);
    
  if (contacts) {
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
      ContactsApi.delete(id)
        .then(() => getContactsList())
        .catch(showError)
        
      contactsEl.remove();
      return;
    }
      if (e.target.classList.contains(EDIT_BTN_CLASS)) {
      fillForm(contacts);
      return;
    }
  }
}

function getContactsEl(el) {
  return el.closest(CONTACTS_ITEM_SELECTOR);
}

function getContactsId(contactsEl) {
  return contactsEl.dataset.id;
}

function fillForm(contacts) {
    idInput.value = contacts.id
    inputName.value = contacts.firstName
    inputSurname.value = contacts.lastName
    inputPhone.value = contacts.phone
}

function saveContacts(contacts) {
  if (contacts.id) {
      ContactsApi.update(contacts.id, contacts)
          .then(() => getContactsList())
          .catch(showError)

    const contactsOld = contactsList.find(contactsI => contactsI.id === contacts.id)
      contactsOld.firstName = contacts.firstName
      contactsOld.lastName = contacts.lastName
      contactsOld.phone =contacts.phone

    replaceContactsElById(contacts.id, contacts);
  } else {
    ContactsApi.create(contacts)
      .then(() => getContactsList())
      .catch(showError)
      
    addContactsItem(contacts)
  }
}

function replaceContactsElById(id, contacts) {
  const oldContactsEl = document.querySelector(`[data-id="${id}"]`);
  const newContactsEl = generateContactsItemHTML(contacts);

  oldContactsEl.outerHTML = newContactsEl;
}

function getContacts() {
  const id = idInput.value;
  const contacts = contactsList.find(contactsI => contactsI.id === id) || {};
  return {
    ...contacts,
    firstName: inputName.value,
    lastName: inputSurname.value,
    phone: inputPhone.value,  };
}

function addContactsItem(contacts) {
  const html = generateContactsItemHTML(contacts);

  tableContactsList.insertAdjacentHTML('beforeend', html);
}