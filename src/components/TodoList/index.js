import React from 'react'
import './index.css'

function TodoList ({ children }) {
  return (
      <section>
          <ul className='todoList'>
              {
                children
            }
          </ul>
      </section>
  )
}

export { TodoList }
