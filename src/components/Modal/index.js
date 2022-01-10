import React from 'react'
import reactDom from 'react-dom'
import './index.css'

function Modal ({ children, setOpenModal }) {
  const onCloseModal = () => {
    setOpenModal(false)
  }
  return reactDom.createPortal(
      <div className='modal__background'>
          <div className="modal__container">
              <div className="modal__close" onClick={onCloseModal}>x</div>
              {children}
          </div>
      </div>,
      document.getElementById('modal')
  )
}
export { Modal }
