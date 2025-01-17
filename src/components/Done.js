import React,{useState} from 'react'
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { MdDeleteForever } from "react-icons/md";

function Done({done, completeTodo, removeTodo, updateTodo, doingTodo,doneTodo,deleteTodo}) {
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
    return (
      <div>
        {done.map((done, index) => (
        <div
          className={done.isComplete ? 'todo-row complete' : 'todo-row'}
          key={index}
        >
          <div key={done.id} onClick={() => completeTodo(done.id)}>
            {done.text}
          </div>
          <div className='icons'>
            <RiCloseCircleLine
              onClick={() => deleteTodo(done.id)}
              className='delete-icon'
            />
            <TiEdit
              onClick={() => setEdit({ id: done.id, value: done.text })}
              className='edit-icon'
            />
          </div>
         
        </div>
      )) }
      <div className='delbtn'>
      <MdDeleteForever />
      </div>
      </div>
    );
}

export default Done