import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoListItems from '../TodoListItems/TodoListItems';
import TodoListHeader from '../TodoListHeader/TodoListHeader';
import TodoInputText from '../TodoInputText/TodoInputText';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  // Add new Todo
  const handleClickAddTodo = (title) => {
    const newTodo = { id: uuidv4(), title, completed: false };
    setTodos((prevState) => [...prevState, newTodo]);
  };

  // Remove Todo
  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Complete Todo
  const handleCompleteTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    );
  };

  return (
    <div className="todoListContainer">
      <TodoListHeader />
      <TodoInputText handleClickAddTodo={handleClickAddTodo} />
      <TodoListItems
        todos={todos}
        handleRemoveTodo={handleRemoveTodo}
        handleCompleteTodo={handleCompleteTodo}
      />
    </div>
  );
};

export default TodoList;
