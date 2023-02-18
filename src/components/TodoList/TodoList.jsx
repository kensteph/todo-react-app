import React, { useState } from 'react';
import TodoListItems from '../TodoListItems/TodoListItems';
import TodoListHeader from '../TodoListHeader/TodoListHeader';
import TodoInputText from '../TodoInputText/TodoInputText';

const TodoList = () => {
  const [todos] = useState([
    {
      id: 1,
      title: 'Task 1',
      completed: true,
    },
    {
      id: 2,
      title: 'Task 2',
      completed: true,
    },
    {
      id: 3,
      title: 'Task 3',
      completed: true,
    },
  ]);

  return (
    <div className="todoListContainer">
      <TodoListHeader />
      <TodoInputText />
      <TodoListItems todos={todos} />
    </div>
  );
};

export default TodoList;
