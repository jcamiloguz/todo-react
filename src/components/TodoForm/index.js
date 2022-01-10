import React, { useContext, useState } from 'react'
import { TodoContext } from '../../context/todoContext'
import './index.css'

function TodoForm () {
  const [newTodoValue, setNewTodoValue] = useState('')
  const { addTodo, setOpenModal } = useContext(TodoContext)
  const onSubmitForm = (event) => {
    event.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(false)
  }
  const onWrite = (event) => {
    setNewTodoValue(event.target.value)
  }
  return (
      <form onSubmit={onSubmitForm}className='form__container'>
          <label>
          </label>
          <textarea className='form__textarea' placeholder='Ingresa tu TODO' value={newTodoValue} onChange={onWrite}/>
          <button type="submit" className='form__buton--create'> Create TODO </button>
      </form>
  )
}

export { TodoForm }
