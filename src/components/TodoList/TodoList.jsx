import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoListItems from '../TodoListItems/TodoListItems';
import TodoListHeader from '../TodoListHeader/TodoListHeader';
import TodoInputText from '../TodoInputText/TodoInputText';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const handleClickAddTodo = (title) => {
    const newTodo = { id: uuidv4(), title, completed: false };
    setTodos((prevState) => [...prevState, newTodo]);
    console.log('TEST', newTodo);
  };

  return (
    <div className="todoListContainer">
      <TodoListHeader />
      <TodoInputText handleClickAddTodo={handleClickAddTodo} />
      <TodoListItems todos={todos} />
    </div>
  );
};

export default TodoList;
