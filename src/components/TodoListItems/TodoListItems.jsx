import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';

const TodoListItems = ({ todos, handleRemoveTodo }) => (
  <ul className="listItems">
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} handleRemoveTodo={handleRemoveTodo} />
    ))}
  </ul>
);
TodoListItems.propTypes = { todos: PropTypes.shape([]) };
TodoListItems.defaultProps = { todos: [] };
TodoListItems.propTypes = { handleRemoveTodo: PropTypes.func };
TodoListItems.defaultProps = { handleRemoveTodo: () => {} };

export default TodoListItems;
