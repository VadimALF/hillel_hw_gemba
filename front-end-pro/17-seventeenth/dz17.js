'use strict'

const DELET_BUTTON_CLASS = 'btnDel'
const EDIT_BUTTON_CLASS = 'btnEdit'
const NEW_ROW_SELECTOR = '.trNewRow'
const URL = 'https://62054479161670001741b708.mockapi.io/api/todo'

const formThedTemplate = document.querySelector('#todoTheadTemplate').innerHTML
const tabList = document.querySelector('#tabList')
tabList.insertAdjacentHTML('afterend', formThedTemplate)

const input = document.querySelector('#inputComment')
const tableTodoList = document.querySelector('#tableTodoList')
const trNewRow = document.querySelector(NEW_ROW_SELECTOR)
const btnAddElement = document.querySelector('#btnAdd')
const btnDelElement = document.querySelector('#btnDel')
const btnEditElement = document.querySelector('#btnEdit')
const formTemplate = document.querySelector('#todoRowTemplate').innerHTML

btnAddElement.addEventListener('click', onBtnAddClick)
input.addEventListener('click', onInputClick)
tableTodoList.addEventListener('click', onTableClick)

getTodoList()

function getTodoList() {
  fetch(URL)
    .then((res) => res.json())
    .then(renderTodoList)
    .catch(showError)
}

function renderTodoList(todoList) {
  todoList.forEach(todo => addTodoItem(todo))
}

function addTodoItem(todo) {
  const html = generateTodoItemHTML(todo)
  tableTodoList.insertAdjacentHTML('beforeend', html)
}

function generateTodoItemHTML(todo) {
  const htmlRow = formTemplate.replace('{{newTitle}}', todo.title).
    replace('{{newDone}}', todo.done).replace('{{todoId}}', todo.id).
    replace('{{newId}}', todo.id)
  return htmlRow
}

function showError(error) {
  alert('error = ' + error.message)
}

function onBtnAddClick() {
  const todo = getTodo()

  if (!isMessageValid(todo)) {
    alert('This field must be filled')
    return
  }

  createTodo(todo)
  clear()
}

function clear() {
  input.value = ''
}

function isMessageValid(todo) {
  return todo.title !== ''
}

function getTodo() {
  return {
    title: input.value,
    done: false,
  }
}

function createTodo(todo) {
  fetch(URL, {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Content-type': 'application/json',
    }
  })
    .then((res) => res.json())
    .then((todoWithId) => {addTodoItem(todoWithId)})
    .catch(showError)
}

function onInputClick () {
  input.style.color = 'black'
}

function onTableClick(e) {
  if (e.target.classList.contains(DELET_BUTTON_CLASS)) {
      delTodoElement(e.target)
  }
  else if (e.target.classList.contains(EDIT_BUTTON_CLASS)) {
    e.target.closest(NEW_ROW_SELECTOR).remove()
    getTodoId(e.target.closest(NEW_ROW_SELECTOR).dataset.id)
  }
}

function delTodoElement(el) {
  if (confirm('точно удалить?')) {
    fetch(URL + '/' + todoId, {
        method: 'DELETE'
    })
        .catch(showError)
    el.closest(NEW_ROW_SELECTOR).remove()
  }
}

function getTodoId(todoId) {
  fetch(URL + '/' + todoId)
    .then((res) => res.json())
    .then((res) => editTodoElement(res))
    .catch(showError)  
}

function editTodoElement(el) {
  if (el.done === false) { el.done = true }
  else { el.done = false }
  editTodo(el)
}

function editTodo(todo) {
  fetch(URL + '/' + todo.id, {
    method: 'PUT',
    body: JSON.stringify(todo),
    headers: {
      'Content-type': 'application/json',
    }
  })
    .then((res) => res.json())
    .then((todoWithId) => {addTodoItem(todoWithId)})
    .catch(showError)
}