import React from 'react';
import './todoInputText.css';

const TodoInputText = () => (
  <div className="inputContainer">
    <input type="text" placeholder="Add todo..." />
    <span className="material-symbols-rounded">add_circle</span>
  </div>
);

export default TodoInputText;
