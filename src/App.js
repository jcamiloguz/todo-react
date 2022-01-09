import './App.css'
import React from 'react'
import { Header } from './components/Header'
import {TodoSearch} from './components/TodoSearch'
import {CreateTodoButton} from './components/CreateTodoButton'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'

// eslint-disable-next-line
const todos = [{ text: 'Cortar Cebella', completed: false },
  { text: 'Curso React', completed: true },
  { text: 'Hacer almuerzo', completed: false }]

function App () {
  return (
    <>
    <Header/>
    <TodoSearch/>
    <TodoList>
      {
        todos.map((todo,index)=>(
          <TodoItem key={index} text={todo.text} completed={todo.completed} />
        ))
      }
    </TodoList>
    <CreateTodoButton/>
    </>
  )
}

export default App
