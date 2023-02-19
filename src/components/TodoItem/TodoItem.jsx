import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({
  todo,
  handleRemoveTodo,
  handleCompleteTodo,
  handleEditTodo,
}) => {
  const { title, id, completed } = todo;
  const [input, setInput] = useState(title);
  const handleClick = () => {
    handleRemoveTodo(id);
  };

  const handleCheck = () => {
    handleCompleteTodo(id);
  };

  const handleOnKeyUp = () => {
    handleEditTodo(id, input);
  };
  return (
    <li className="todoItem">
      <input type="checkbox" checked={completed} onChange={handleCheck} />
      <input
        readOnly={completed}
        className="inputText"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={handleOnKeyUp}
      />
      <button type="button" onClick={handleClick}>
        <span className="material-symbols-rounded">delete</span>
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    completed: PropTypes.bool,
  }),
};
TodoItem.defaultProps = { todo: {} };
TodoItem.propTypes = { handleRemoveTodo: PropTypes.func };
TodoItem.defaultProps = { handleRemoveTodo: () => {} };
TodoItem.propTypes = { handleCompleteTodo: PropTypes.func };
TodoItem.defaultProps = { handleCompleteTodo: () => {} };
TodoItem.propTypes = { handleEditTodo: PropTypes.func };
TodoItem.defaultProps = { handleEditTodo: () => {} };

export default TodoItem;
