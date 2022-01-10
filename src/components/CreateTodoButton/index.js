import React from 'react'
import './index.css'

function CreateTodoButton ({ setOpenModal }) {
  const onClickButton = () => {
    setOpenModal(true)
  }

  return (
      <button className='createTodoButon' onClick={onClickButton}>Add a Todo +</button>
  )
}

export { CreateTodoButton }
