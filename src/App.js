import './App.css'
import React from 'react'
import { Header } from './components/Header'
import {TodoSearch} from './components/TodoSearch'
import {CreateTodoButton} from './components/CreateTodoButton'

// eslint-disable-next-line
const todos = [{ text: 'Cortar Cebella', completed: false },
  { text: 'Curso Reac"', completed: true },
  { text: 'Hacer almuerzo', completed: false }]

function App () {
  return (
    <>
    <Header/>
    {<TodoSearch/>}
    {/* <TodoList> */}
      {/* <TodoItem/> */}
    {/* </TodoList> */}
    <CreateTodoButton/>
    </>
  )
}

export default App
