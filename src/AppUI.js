import { useContext, useState } from 'react';
import { TodoCounter, TodoItem, TodoList, TodoSearch, CreateTodoButton, Modal } from './components';
// import { useLocalStorage } from './hooks/useLocalStorage';
import { TodosLoading } from './components/TodosLoading/TodosLoading';
import { TodosError } from './components/TodosError/TodosError';
import { TodosEmptyList } from './components/TodosEmptyList/TodosEmptyList';
import { TodoContext, TodoProvider } from './components/TodoContext/TodoContext';


import { TodoForm } from './components/TodoForm/TodoForm';

export const AppUI = () => {

    const { loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal} = useContext(TodoContext)

    const toggleModal = () => {

        if (openModal === false)
        {
        setOpenModal(!openModal);
        
        document.getElementById('root').classList.toggle('modalAbierto');
        document.getElementById('modal').style= "z-index: 500"
        setTimeout(() => {
            document.getElementById("myTextarea").focus();
            document.getElementById('modalcito').style = "transform: translateX(450px);"
        },1)
        }
        else
        {
        document.getElementById('root').classList.toggle('modalAbierto');
        setTimeout(() => {
            document.getElementById('modalcito').style = "transform: translateX(1200px);"
        },1)
        setTimeout(() => {
            setOpenModal(!openModal);
        },500)
        }

    }

  return (
    <div className="App">
        <TodoCounter /> 
        <TodoSearch />

        <TodoList /*todos={todos} loading={loading} error={error}*/>

            {loading && <TodosLoading />}
            {error && <TodosError />}
            {!loading && searchedTodos.length === 0 && <TodosEmptyList />}

            {searchedTodos.map(todo => (
                <TodoItem 
                    name={todo.name} 
                    key={todo.id}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.id)} // Completar Todo!
                    onDelete={() => deleteTodo(todo.id)} // Borrar Todo!
                />
            ))}


        </TodoList>

        <CreateTodoButton toggleModal={toggleModal}/>

        {openModal && 
        <Modal>
            <TodoForm toggleModal={toggleModal}/>
        </Modal>
        }

    </div>
  )
}
