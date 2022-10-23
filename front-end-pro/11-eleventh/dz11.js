'use strict'

const DELET_BUTTON_CLASS = 'btnDel'
const NEW_ROW_SELECTOR = '.trNewRow'
const NEW_EL_CLASS = 'tdNewEl'
const NEW_BTN_CLASS = 'tdNewBtn'

const input = document.querySelector('#inputComment')
const tbody = document.querySelector('#tbody')
const btnAddElement = document.querySelector('#btnAdd')
const btnDelElement = document.querySelector('#btnDel')
const formTemplate = document.querySelector('#todoRowTemplate').innerHTML

btnAddElement.addEventListener('click', onBtnAddClick)
input.addEventListener('click', onInputClick)
tbody.addEventListener('click', onTbodyClick)
    
function onBtnAddClick () {
    let newElement = getNewElement()
    if (isNewElement(newElement)) {
        creatTableRow(newElement)
    }
    onInputClick ()
}

function onInputClick () {
    input.style.color = 'black'
    input.value = ''
}

function getNewElement() {
    const newEl = input.value
    return newEl
}

function isNewElement(newEl) {
    if (newEl) { return true }
    else {alert('This field must be filled')}
}

function creatTableRow(newElement) {
    const htmlRow = formTemplate.replace('{{newName}}', newElement)
    tbody.insertAdjacentHTML('beforeend', htmlRow)
}

function onTbodyClick(e) {
    if (e.target.classList.contains(DELET_BUTTON_CLASS)) {
        delElement(e.target)
    }
    else if (e.target.classList.contains(NEW_EL_CLASS)) {
        blueColor(e.target)
    }
    else if (e.target.classList.contains(NEW_BTN_CLASS)) {
        yellowColor(e.target)
    }
}

function delElement(el) {
    el.closest(NEW_ROW_SELECTOR).remove()
}

function blueColor(el) {
    el.classList.toggle('green')
}

function yellowColor(el) {
    el.classList.toggle('yellow')
}