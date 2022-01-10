import './index.css'

import React from 'react'
import { TodoCounter } from '../TodoCounter'

function Header () {
  return (
      <header className="header">
          <h1 className='header__title'>TODO <span className='hightLigth--react'>React</span> app</h1>
          <TodoCounter />
      </header>

  )
}

export { Header }
