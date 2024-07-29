import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCheckDoubleFill } from "react-icons/ri";
import { TiEdit } from 'react-icons/ti';
import { RiArrowRightDoubleLine } from "react-icons/ri";


const Todo = ({ todos, completeTodo, removeTodo, updateTodo, doingTodo,doneTodo}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
      <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
        <RiCheckDoubleFill
          onClick={() => doneTodo(todo.id)}
          className='delete-icon'
        />
        <RiArrowRightDoubleLine
          onClick={() => doingTodo(todo.id)}
         />
        
      </div>
     
    </div>
  ));
};

export default Todo;