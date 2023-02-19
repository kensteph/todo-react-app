import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, handleRemoveTodo, handleCompleteTodo }) => {
  const { title, id } = todo;

  const handleClick = () => {
    handleRemoveTodo(id);
  };

  const handleCheck = () => {
    handleCompleteTodo(id);
  };

  return (
    <li className="todoItem">
      <input type="checkbox" onChange={handleCheck} />
      <input readOnly className="inputText" type="text" value={title} />
      <button type="button" onClick={handleClick}>
        <span className="material-symbols-rounded">delete</span>
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({ title: PropTypes.string, id: PropTypes.string }),
};
TodoItem.defaultProps = { todo: {} };
TodoItem.propTypes = { handleRemoveTodo: PropTypes.func };
TodoItem.defaultProps = { handleRemoveTodo: () => {} };
TodoItem.propTypes = { handleCompleteTodo: PropTypes.func };
TodoItem.defaultProps = { handleCompleteTodo: () => {} };

export default TodoItem;
