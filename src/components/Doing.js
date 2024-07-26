import React,{useState} from 'react'
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { RiArrowRightDoubleLine } from "react-icons/ri";

function Doing({doing, completeTodo, removeTodo, updateTodo, doingTodo,doneTodo}) {
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


  return doing.map((doing, index) => (
    <div
      className={doing.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={doing.id} onClick={() => completeTodo(doing.id)}>
        {doing.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => doneTodo(doing.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: doing.id, value: doing.text })}
          className='edit-icon'
        />
        <RiArrowRightDoubleLine
          onClick={() => doingTodo(doing.id)}
         />
        
      </div>
     
    </div>
  ));
};

export default Doing