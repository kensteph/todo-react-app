import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import {
  addedTodo,
  removedTodo,
  editedTodo,
  comletedTodo,
} from '../../features/todo/todoSlice';

// Components
import TodoListItems from '../TodoListItems/TodoListItems';
import TodoListHeader from '../TodoListHeader/TodoListHeader';
import TodoInputText from '../TodoInputText/TodoInputText';

const TodoList = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();
  // Local Storage
  useEffect(() => {
    localStorage.setItem('react-todo', JSON.stringify(todos));
  }, [todos]);

  // Add new Todo
  const handleClickAddTodo = (title) => {
    dispatch(addedTodo({ id: uuidv4(), title, completed: false }));
  };

  // Remove Todo
  const handleRemoveTodo = (id) => {
    dispatch(removedTodo({ id }));
  };

  // Edit Todo
  const handleEditTodo = (id, value) => {
    dispatch(editedTodo({ id, title: value }));
  };

  // Complete Todo
  const handleCompleteTodo = (id) => {
    dispatch(comletedTodo({ id }));
  };

  return (
    <div className="todoListContainer">
      <TodoListHeader />
      <TodoInputText handleClickAddTodo={handleClickAddTodo} />
      <TodoListItems
        todos={todos}
        handleRemoveTodo={handleRemoveTodo}
        handleCompleteTodo={handleCompleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </div>
  );
};

export default TodoList;
