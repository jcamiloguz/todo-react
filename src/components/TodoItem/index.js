import React from 'react'
import './index.css'

function TodoItem ({ todo, toogleCompleted, deleteTodo }) {
  const { text, completed } = todo
  const onComplete = () => {
    toogleCompleted(todo.id, todo.completed)
  }
  const onDelete = () => {
    deleteTodo(todo.id)
  }

  return (
      <li className='todoItem'>
          <span className={`icon  icon-check ${completed && 'icon-check--active'}`} onClick={onComplete}>
              ✔
          </span>
          <p className={`todoItem__text ${completed && 'todoItem__text--complete'}`}>
              {text}
          </p>
          <p className='icon icon-delete' onClick={onDelete}>
              <span>x</span>
          </p>
      </li>
  )
}

export { TodoItem }
