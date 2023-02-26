import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';

const TodoListItems = ({
  todos,
  handleRemoveTodo,
  handleCompleteTodo,
  handleEditTodo,
}) => (
  <ul className="listItems">
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleRemoveTodo={handleRemoveTodo}
        handleCompleteTodo={handleCompleteTodo}
        handleEditTodo={handleEditTodo}
      />
    ))}
  </ul>
);
TodoListItems.propTypes = { todos: PropTypes.shape([]) };
TodoListItems.defaultProps = { todos: [] };
TodoListItems.propTypes = { handleRemoveTodo: PropTypes.func };
TodoListItems.defaultProps = { handleRemoveTodo: () => {} };
TodoListItems.propTypes = { handleCompleteTodo: PropTypes.func };
TodoListItems.defaultProps = { handleCompleteTodo: () => {} };
TodoListItems.propTypes = { handleEditTodo: PropTypes.func };
TodoListItems.defaultProps = { handleEditTodo: () => {} };

export default TodoListItems;
