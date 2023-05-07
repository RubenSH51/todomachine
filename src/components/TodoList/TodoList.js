import React from 'react'
import { TodoItem } from '../TodoItem/TodoItem'


export const TodoList = (props) => {
  return (
    <ul>
        {props.children}
    </ul>
  )
}
