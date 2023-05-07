import React from 'react'
import ReactDOM from 'react-dom'
import "./Modal.css"

export const Modal = ({children}) => {
  return ReactDOM.createPortal(
    <div className="modal" id="modalcito">
        {children}
    </div>,
    document.getElementById('modal')
  )
}
