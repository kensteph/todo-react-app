import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';

const TodoListItems = ({ todos }) => (
  <ul className="listItems">
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ))}
  </ul>
);
TodoListItems.propTypes = { todos: PropTypes.shape() };
TodoListItems.defaultProps = { todos: [] };

export default TodoListItems;
