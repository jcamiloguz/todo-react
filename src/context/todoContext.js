import React, { createContext, useState } from 'react'
// import { defaultTodos } from '../const/defaultTodos'
import { useLocalStorage } from '../hooks/useLocalStorage'

const TodoContext = createContext()

function TodoProvider ({ children }) {
  const {
    item: todos,
    saveLocalStorage: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = useState('')
  const [openModal, setOpenModal] = useState(false)

  const completedTodos = todos.filter((todo) => todo.completed)

  const toogleCompleted = (todoId, isCompleted) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.id === todoId)
    newTodos[todoIndex].completed = !isCompleted
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    saveTodos(newTodos)
  }

  const deleteTodo = (todoId) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.id === todoId)
    newTodos.splice(todoIndex, 1)
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    saveTodos(newTodos)
  }
  const addTodo = (todoText) => {
    const newTodos = [...todos]
    newTodos.push({
      id: Date.now,
      text: todoText,
      completed: false
    })
    saveTodos(newTodos)
  }

  const searchedTodos =
        searchValue === ''
          ? todos
          : todos.filter((todo) =>
            todo.text.toLowerCase().includes(searchValue.toLowerCase())
          )
  return (
      <TodoContext.Provider
      value={{
        loading,
        error,
        toogleCompleted,
        deleteTodo,
        searchedTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        todos,
        openModal,
        setOpenModal,
        addTodo
      }}

      >
          {children}
      </TodoContext.Provider>

  )
}
export { TodoContext, TodoProvider }
