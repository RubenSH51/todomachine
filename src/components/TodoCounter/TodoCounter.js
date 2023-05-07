import React from 'react'
import "./TodoCounter.css"
import { TodoContext } from '../TodoContext/TodoContext'; //(0) No olvides importar el contexto!
import { useContext } from 'react'; // (1) para no usar TodoContext.Consumer en App.js al pasarle props



export const TodoCounter = (/*{todos, loading}*/ ) => { // (2) sin parámetros

    const { todos, loading } = useContext(TodoContext); // (3) Extraes la info que necesitas
    const completedTodos = todos.filter(todo => todo.completed === true).length;
  return (
    <div>
      <marquee behavior="alternate">😌 Este Todo Machine es mejor que el de JuanDC 😌</marquee>

      {!loading && todos.length>0 && completedTodos === todos.length ?
      <h2>Tareas completadas 😎! Felicitaciones 🥳🎉!!! </h2>
      :
      <h2>Has completado {completedTodos} de {todos.length} TODOs</h2>
      }

    </div>
  )
}
