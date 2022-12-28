import React, { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [todoList, setTodoList] = useState([
    {"title": "Залужний", "status":false, "done":true, "id": "2"},
    {"title": "Зеленський", "status":true, "done":true, "id": "3"},
    {"title": "Арестович", "status":true, "done":true, "id": "4"},
    {"title": "fugit veritatis vel", "status":true, "done":true, "id": "5"},
    {"title": "рапрпа", "status":false, "done":true, "id": "9999"}
  ]);

  function onSaveBtnClick() {
    const newArr = [
      ...todoList,
      {
        "title": message,
        "status":false,
        "done": false,
        "className": 'newEl',
        "id": String(Math.random())
      }
    ]

    setTodoList(newArr)
    setMessage('')
  }

  function onDelBtnClick(e) {
    console.log(e.target.parentNode.id)
    e.target.parentNode.remove()
  }

    function onRedBtnClick(e) {
    e.target.parentNode.style.color = "red"
  }


  function onMessageChange(e) {
    setMessage(e.target.value)
  }

  return (
    <>
      <input type='text' value={message} onChange={onMessageChange} />
      <button onClick={onSaveBtnClick}>Save</button>

      <ul>
        {todoList.map((todo) => {
          return <li id={todo.id}
            key={todo.id}>
            {todo.title}
            <button onClick={onDelBtnClick}>Del</button>
            <button onClick={onRedBtnClick}>Red</button>
          </li>
        })}
      </ul>
    </>
  )
}

export default App