'use strict'

const SUBMIT_BUTTON_ID = 'btnSubmit'
const DELETE_BTN_CLASS = 'btnDel'
const EDIT_BTN_CLASS = 'btnEdit'
const TODO_ITEM_SELECTOR = '.todoItem'

const idInput = document.querySelector('#idInput')
const inputName = document.querySelector('#inputName')
const inputSurname = document.querySelector('#inputSurname')
const inputPhone = document.querySelector('#inputPhone')
const btnSubmitEl = document.querySelector('#btnSubmit')
const todoForm = document.querySelector('#todoForm')
let tableTodoList = document.querySelector('#tableTodoList')
let todoList = []

todoForm.addEventListener('submit', onTodoFormSubmit)
tableTodoList.addEventListener('click', onTodoListClick)


getTodoList()

function getTodoList() {
    TodoApi.getList()
        .then(list => todoList = list)
        .then((todoList) => {
            renderTodoList(todoList)
        })
        .catch(showError)
}

function renderTodoList(todoList) {
  const html = todoList.map(generateTodoItemHTML).join('');
  tableTodoList.innerHTML = html;
}

function generateTodoItemHTML(todo) {
  return `
    <tr class="todoItem" data-id="${todo.id}">
            <td class="tdIdNew">${todo.id}</td>
            <td class="tdNameNew">${todo.firstName}</td>
            <td class="tdSuameNew">${todo.lastName}</td>
            <td class="tdPhoneNew"><a href="tel:${todo.phone}">${todo.phone}</a></td>
            <td class="tdEditBtn"><button class="btnEdit">Edit</button></td>
            <td class="tdDelBtn"><button class="btnDel">Del</button></td>
        </tr>
  `
}

function showError(error) {
  alert(error.message);
}

function onTodoFormSubmit(e) {
    e.preventDefault()

    const todo = getTodo()
    let todoOut = {
        firstName: inputName.value,
        lastName: inputSurname.value,
        phone: inputPhone.value,
        id: idInput.value
    }
    idInput.value = ''
    if (checkValue(todoOut)) {
        saveTodo(todoOut)
    }
    else {
        alert('Заповніть будь ласка форму.\nПоля не повинні бути порожні.\n' +
            'номер телефону 0123456789 неприпустимо')
    }
    todoForm.reset()
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

function checkValue(todoOut) {
    return (todoOut.firstName !== ''
        && todoOut.lastName !== ''
        && todoOut.phone !== '')
}

function onTodoListClick(e){
  const todoEl = getTodoEl(e.target);
  const id = getTodoId(todoEl);
  const todo = todoList.find(todoItem => todoItem.id === id);
    
  if (todo) {
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
      TodoApi.delete(id)
        .then(() => getTodoList())
        .catch(showError)
        
      todoEl.remove();
      return;
    }
      if (e.target.classList.contains(EDIT_BTN_CLASS)) {
      fillForm(todo);
      return;
    }
  }
}

function getTodoEl(el) {
  return el.closest(TODO_ITEM_SELECTOR);
}

function getTodoId(todoEl) {
  return todoEl.dataset.id;
}

function fillForm(todo) {
    idInput.value = todo.id
    inputName.value = todo.firstName
    inputSurname.value = todo.lastName
    inputPhone.value = todo.phone
}

function saveTodo(todo) {
  if (todo.id) {
      TodoApi.update(todo.id, todo)
          .then(() => getTodoList())
          .catch(showError)

    const todoOld = todoList.find(todoI => todoI.id === todo.id)
      todoOld.firstName = todo.firstName
      todoOld.lastName = todo.lastName
      todoOld.phone =todo.phone

    replaceTodoElById(todo.id, todo);
  } else {
    TodoApi.create(todo)
      .then(() => getTodoList())
      .catch(showError)
      
    addTodoItem(todo)
  }
}

function replaceTodoElById(id, todo) {
  const oldTodoEl = document.querySelector(`[data-id="${id}"]`);
  const newTodoEl = generateTodoItemHTML(todo);

  oldTodoEl.outerHTML = newTodoEl;
}

function getTodo() {
  const id = idInput.value;
  const todo = todoList.find(todoI => todoI.id === id) || {};
  return {
    ...todo,
    firstName: inputName.value,
    lastName: inputSurname.value,
    phone: inputPhone.value,  };
}

function addTodoItem(todo) {
  const html = generateTodoItemHTML(todo);

  tableTodoList.insertAdjacentHTML('beforeend', html);
}