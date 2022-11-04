'use strict'

const btnGetUrl = document.querySelector('#btnGet')
const input = document.querySelector('#inputComment')
const getRow = document.querySelector('#getRow')

btnGetUrl.addEventListener('click', onBtnGetClick)
input.addEventListener('click', onInputClick)

function onBtnGetClick () {
  let getUser = getUserName()
  getJson(getUser)
  onInputClick()
}

function onInputClick () {
    input.style.color = 'black'
    input.value = ''
}

function getUserName() {
    const newUrl = input.value
    return newUrl
}

function getJson(userName) {
  fetch('https://api.github.com/users/' + userName)
    .then((res) => {
      if (res.ok) { return res.json() }
      else { alert('The "' + userName + '" is not a user name') }
    })
    .then((res) => {
     renderArr(res, userName) 
    })
}

function renderArr(objGitUser, userName) {
  if (objGitUser) {
    const htmlForm = creatUserHTML(objGitUser)
    getRow.insertAdjacentHTML('afterend', htmlForm)
  }
  else {
    const htmlForm = creatErrorHTML(userName)
    getRow.insertAdjacentHTML('afterend', htmlForm)
  }
}

function creatUserHTML(obj) {
  return `
      <div>
      <br /> <hr />
        <p>Information about user "<b>${obj.name}</b>" (login <b>${obj.login}</b>)</p>
        <img src="${obj.avatar_url}" alt="${obj.login}" title="${obj.name}">
        <p>Followers: ${obj.followers} </p>
        <p>following: ${obj.following} </p>
      </div>`
}

function creatErrorHTML(userName) {
    return `
      <div>
      <br /> <hr />
        <p>Information about user <b>${userName}</b></p>
        <img src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU=w240-h480-rw" alt="error" title="404">
        <p>The "<b>${userName}</b>" is not a user name</p>
      </div>`
}
