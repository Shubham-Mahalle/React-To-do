import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import Doing from './Doing';
import Done from './Done'

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [doing,setDoing] = useState([]);
  const [done,setDone] = useState([]);
  
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };
 
  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const doingTodo = id => {
    const taskToMove = todos.find(todo => todo.id === id);
    if (taskToMove) {
      const newTodos = todos.filter(todo => todo.id !== id);
      setTodos(newTodos);
      setDoing([taskToMove, ...doing]);
    }
  };
  const doneTodo = (id,index,arrayType) =>{
    let taskToMove;
    let newArray;
    if (arrayType === 'todos') {
      taskToMove = todos.find(todo => todo.id === id);
      newArray = todos.filter(todo => todo.id !== id);
      setTodos(newArray);
    } else if (arrayType === 'doing') {
      taskToMove = doing.find(todo => todo.id === id);
      newArray = doing.filter(todo => todo.id !== id);
      setDoing(newArray);
    } else {
      return;
    }
    
    if (taskToMove) {
      setDone([taskToMove, ...done]);
    }
  }
  const deleteTodo = id =>{
     const newTodos = done.filter(todo=>todo.id !== id);
     setDone(newTodos);
  }
  return (
    <>
      <div className='container'>
      <div className="todo-app">
        <h1>What's the Plan for Today?</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
          doingTodo={doingTodo}
          doneTodo={doneTodo}
        />
      </div>
      <div className="todo-app">
        <h1>Doing...</h1>
        <Doing 
        doing={doing}
        completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
          doingTodo={doingTodo}
          doneTodo={doneTodo} />
      </div>
      <div className="todo-app">
        <h1>Done!!!</h1>
        <Done 
        done={done}
        completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
          doingTodo={doingTodo}
          doneTodo={doneTodo}
          deleteTodo={deleteTodo}
          />
      </div>
 </div>
      
    </>
  );
}

export default TodoList;