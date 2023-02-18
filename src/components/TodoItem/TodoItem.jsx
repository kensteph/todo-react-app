import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo }) => {
  const { title } = todo;
  return (
    <li className="todoItem">
      <input type="checkbox" />
      <input readOnly className="inputText" type="text" value={title} />
      <span className="material-symbols-rounded">delete</span>
    </li>
  );
};

TodoItem.propTypes = { todo: PropTypes.shape({ title: PropTypes.string }) };
TodoItem.defaultProps = { todo: {} };

export default TodoItem;
