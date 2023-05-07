import React from 'react'
import "./TodoItem.css"
import { FiCheckCircle } from "react-icons/fi"
 

export const TodoItem = (props) => {
  return (
    <li>
        <span 
          className={`Icon ${props.completed ? "Icon-check--active" : ""}`}
          onClick={props.onComplete}
        >{props.completed ? "✅" : "📝" }</span>

        <p className={`Icon ${props.completed ? "p-check--active" : ""}`}>{props.name}</p>
        <span 
          className={``}
          onClick={props.onDelete}
        >🗑️</span>
    </li>
  )
}
