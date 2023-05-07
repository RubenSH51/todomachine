import React from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useState } from 'react';

const TodoContext = React.createContext();

function TodoProvider({children})
{
    const { item: todos, 
        savedItem: saveTodos,
        loading,
        error} = useLocalStorage('TODOS_V1',[])

    const [searchValue, setSearchValue] = useState('')
    const searchedTodos = todos.filter(todo => todo.name.toLowerCase().includes(searchValue.toLowerCase()))

    const [openModal, setOpenModal] = useState(false)

    const completeTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.id === id)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos)
    }

    const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    saveTodos(newTodos)
}

    const addTodo = (text) => {

        const newTodos = [...todos];
        const nuevaTareita = {
            id: Math.floor(Math.random()*10000),
            name: text,
            completed: false
        }
        nuevaTareita.id = String(nuevaTareita.id).padStart(4, '0'); // Punto para chatGPT
        newTodos.push(nuevaTareita);

        saveTodos(newTodos)

    }


    return (
        <TodoContext.Provider value={{
            todos, // Sin este valor crashea
            loading,
            error,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}



export { TodoContext, TodoProvider }