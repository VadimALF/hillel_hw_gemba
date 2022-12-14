'use strict'

const ADD_BUTTON_ID = '#btnAdd'
const DELETE_BTN_CLASS = '.btnDel'
const EDIT_BTN_CLASS = '.btnEdit'
const CONTACTS_ITEM_SELECTOR = '.contactsItem'
const FIRST_FORM = 0

const $idInput = $('#idInput')
const $inputName = $('#inputName')
const $inputSurname = $('#inputSurname')
const $inputPhone = $('#inputPhone')
const $btnAddEl = $(ADD_BUTTON_ID)
const $contactsForm = $('#contactsForm')
let $tableContactsList = $('#tableContactsList')
let contactsList = []

const dialog = $( "#dialog-form" ).dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
          "Save": () => {
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
                alert('Заповніть будь ласка форму.\nПоля не повинні бути порожні.\n')
            }
            clear()
          },
          Cancel: function () {
            clear()
          }
        }
      })

$btnAddEl.on('click', onBtnAddClick)
$tableContactsList
  .on('click', DELETE_BTN_CLASS, onDelBtnClick)
  .on('click', EDIT_BTN_CLASS, onEditBtnClick)

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
  $tableContactsList.html(contactsList.map(generateContactsItemHTML))
}

function generateContactsItemHTML(contact) {
  return `
    <tr class="contactsItem" data-id="${contact.id}">
            <td class="tdIdNew">${contact.id}</td>
            <td class="tdNameNew">${contact.firstName}</td>
            <td class="tdSuameNew">${contact.lastName}</td>
            <td class="tdPhoneNew"><a href="tel:${contact.phone}">${contact.phone}</a></td>
            <td class="tdEditBtn"><button class="btnEdit">Edit</button></td>
            <td class="tdDelBtn"><button class="btnDel">Del</button></td>
        </tr>
  `
}

function showError(error) {
  alert(error.message)
}

function onBtnAddClick(e) {
  dialog.dialog("open")
}

function checkValue(contactsOut) {
    return (contactsOut.firstName !== ''
        && contactsOut.lastName !== ''
        && contactsOut.phone !== '')
}

function onDelBtnClick() {
  const $contactEl = getContactEl($(this))
  const id = String(getContactId($contactEl))
  const contact = contactsList.find(contactItem => contactItem.id === id)

  if (contact) {
    ContactsApi.delete(id)
      .then(() => getContactsList())
      .catch(showError)
    
    $contactEl[FIRST_FORM].remove()
    return
  }
}

function onEditBtnClick() {
  const $contactEl = getContactEl($(this))
  const id = String(getContactId($contactEl))
  const contact = contactsList.find(contactItem => contactItem.id === id)

  if (contact) {
    fillForm(contact)
    return
  }  
}

function getContactEl($el) {
    return $el.closest(CONTACTS_ITEM_SELECTOR)
}

function getContactId($contactEl) {
  return $contactEl.data('id')
}

function fillForm(contact) {
  $idInput[FIRST_FORM].value = contact.id
  $inputName[FIRST_FORM].value = contact.firstName
  $inputSurname[FIRST_FORM].value = contact.lastName
  $inputPhone[FIRST_FORM].value = contact.phone
  dialog.dialog("open")
}

function saveContacts(contacts) {
  if (contacts.id) {
    ContactsApi.update(contacts.id, contacts)
      .then(() => getContactsList())
      .catch(showError)

    const contactsOld = contactsList.find(contactsI => contactsI.id === contacts.id)
      contactsOld.firstName = contacts.firstName
      contactsOld.lastName = contacts.lastName
      contactsOld.phone = contacts.phone

    replaceContactsElById(contacts.id, contacts)
  } else {
    ContactsApi.create(contacts)
      .then(() => getContactsList())
      .catch(showError)
      
    addContactsItem(contacts)
  }
}

function replaceContactsElById(id, contacts) {
  const oldContactsEl = document.querySelector(`[data-id="${id}"]`)
  const newContactsEl = generateContactsItemHTML(contacts)

  oldContactsEl.outerHTML = newContactsEl
}

function getContacts() {
  const id = idInput.value
  const contacts = contactsList.find(contactsI => contactsI.id === id) || {}
  return {
    ...contacts,
    firstName: inputName.value,
    lastName: inputSurname.value,
    phone: inputPhone.value,  }
}

function addContactsItem(contacts) {
  const html = generateContactsItemHTML(contacts)

  $tableContactsList.insertAfter('beforeend', html)
}

function clear() {
  $contactsForm[FIRST_FORM].reset()
  dialog.dialog( "close" )
}