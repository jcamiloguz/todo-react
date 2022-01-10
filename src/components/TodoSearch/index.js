import React, { useContext } from 'react'
import { TodoContext } from '../../context/todoContext'
import './index.css'

function TodoSearch () {
  const { searchValue, setSearchValue } = useContext(TodoContext)
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
      <>
          <div className='search__container'>
              <input className='search'type="text" placeholder='Search a Todo ' value={searchValue} onChange={onSearchValueChange}/>
          </div>
      </>
  )
}

export { TodoSearch }
