import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

const TodoListItems = () => {
  return (
    <ul className="listItems">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  );
};

export default TodoListItems;
