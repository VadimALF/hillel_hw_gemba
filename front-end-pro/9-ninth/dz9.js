const inputEl = document.querySelector('#inputComment')
const ulEl = document.querySelector('ul')
const btnOneEl = document.querySelector('#btnOne')

btnOneEl.addEventListener('click', onBtnOneClick)
inputEl.addEventListener('click', onInputClick)
    
function onBtnOneClick () {
    let liEl = document.createElement('li')
    if (inputEl.value !== '' && inputEl.value !== 'input text') {
        liEl.textContent = inputEl.value 
        ulEl.append(liEl)
    }
    inputEl.value = 'input text'
    inputEl.style.color = 'grey'
}

function onInputClick () {
    inputEl.style.color = 'black'
    inputEl.value = ''
}
