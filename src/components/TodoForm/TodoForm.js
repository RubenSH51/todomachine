import React, { useContext, useState } from 'react'
import closeIcon from "../../assets/closeIcon.png"
import "../TodoForm/TodoForm.css"
import { TodoContext } from '../TodoContext/TodoContext'

export const TodoForm = ({toggleModal}) => {

    const { addTodo } = useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = useState('')

    /////////// funciones 👇👇👇👇 ///////////
    const onTextAreaChange = (e) => 
    {
        setNewTodoValue(e.target.value);
    }

    const onSubmit = (e) => 
    {
        e.preventDefault();
        addTodo(newTodoValue);
        toggleModal();
    }

    const myTextarea = document.getElementById("myTextarea");

  return (
    <form onSubmit={onSubmit}>
        <img src={closeIcon} onClick={() => toggleModal()} />
        <h2>Crea un TODO 😇</h2>
        <textarea id="myTextarea"
            placeholder="Escribe la tarea..." 
            value={newTodoValue}
            onChange={onTextAreaChange}>
        </textarea>
        <div className="modalBotonera">
            <button type="button" onClick={() => toggleModal()}>Cancelar</button>
            <button>Crear</button>
        </div>
    </form>
  )
}
