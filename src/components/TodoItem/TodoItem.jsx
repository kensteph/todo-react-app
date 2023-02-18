import React from 'react';

const TodoItem = () => (
  <li className="todoItem">
    <input type="checkbox" />
    <input readOnly className="inputText" type="text" value="Task 1" />
    {' '}
    <span className="material-symbols-rounded">delete</span>
  </li>
);

export default TodoItem;
