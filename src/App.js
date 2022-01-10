import './App.css'
import React, { useContext } from 'react'
import { Header } from './components/Header'
import { TodoSearch } from './components/TodoSearch'
import { CreateTodoButton } from './components/CreateTodoButton'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { TodoContext } from './context/todoContext'
import { Modal } from './components/Modal'
import { TodoForm } from './components/TodoForm'

function App () {
  const { error, loading, searchedTodos, toogleCompleted, deleteTodo, openModal, setOpenModal } = useContext(TodoContext)
  return (
      <>
          <Header />
          <TodoSearch />
          <TodoList>
              {error && <p>Ups</p>}
              {loading && <p>Loading...</p>}
              {(!loading && !searchedTodos.length) && <p>Start creating a Todo</p>}
              {searchedTodos.map((todo) => (
                  <TodoItem
                    todo={todo}
                    key={todo.id}
                    toogleCompleted={toogleCompleted}
                    deleteTodo={deleteTodo}
                  />))}
          </TodoList>
          {openModal && (
          <Modal setOpenModal={setOpenModal}>
              <TodoForm/>
          </Modal>
          )}
          <CreateTodoButton setOpenModal={setOpenModal}/>
      </>
  )
}

export default App
