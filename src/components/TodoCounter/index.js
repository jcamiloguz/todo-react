import React, { useContext } from 'react'
import { TodoContext } from '../../context/todoContext'
import './index.css'

const TodoCounter = () => {
  const { completedTodos, todos } = useContext(TodoContext)
  return (
      <h2 className='todoCounter__text'>
          You have {completedTodos.length} tasks out of {todos.length} left
      </h2>
  )
}

export { TodoCounter }
