import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, handleRemoveTodo }) => {
  const { title, id } = todo;
  const handleClick = () => {
    handleRemoveTodo(id);
  };
  return (
    <li className="todoItem">
      <input type="checkbox" />
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

export default TodoItem;
