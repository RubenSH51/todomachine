import React, { useContext } from 'react'
import "./CreateTodoButton.css"
import { TodoContext } from '../TodoContext/TodoContext'

export const CreateTodoButton = ({toggleModal}) => {

  const {openModal, setOpenModal} = useContext(TodoContext);

  return (
    <button className="btnAbrirModal" onClick={() => toggleModal()}>+</button>
  )
}
