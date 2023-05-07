import React, { useContext, useState } from 'react'
import "./TodoSearch.css"
import { TodoContext } from '../TodoContext/TodoContext'

export const TodoSearch = () => {

  const {searchValue,setSearchValue} = useContext(TodoContext)

  return (
    <div>
        <input 
          type="text" 
          placeholder="Add new todo"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
    </div>
  )
}
