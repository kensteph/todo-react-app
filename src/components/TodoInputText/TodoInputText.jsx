import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoInputText = ({ handleClickAddTodo }) => {
  const [inputext, setInputext] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputext.trim().length === 0) {
      setMessage('Please enter a task...');
    } else {
      setMessage('');
      handleClickAddTodo(inputext);
      setInputext('');
    }
  };
  return (
    <>
      <form className="inputContainer" onSubmit={handleSubmit}>
        <input
          className="inputText"
          type="text"
          placeholder="Add todo..."
          value={inputext}
          onChange={(e) => setInputext(e.target.value)}
        />
        <button type="submit">
          <span className="material-symbols-rounded">add_circle</span>
        </button>
      </form>
      <span className="error-msg">{message}</span>
    </>
  );
};
TodoInputText.propTypes = { handleClickAddTodo: PropTypes.func };
TodoInputText.defaultProps = { handleClickAddTodo: () => {} };
export default TodoInputText;
