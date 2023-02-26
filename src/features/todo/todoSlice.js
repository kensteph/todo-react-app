/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

// Get data from local storage
const getDataFromLocalStorage = () => JSON.parse(localStorage.getItem('react-todo')) || [];
const initValue = getDataFromLocalStorage();

// Create our initial state
const initialState = { todos: initValue };

// Create our Slice
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addedTodo: (state, action) => {
      const data = action.payload;
      state.todos.push(data);
    },
    removedTodo: (state, action) => {
      const newTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.id,
      );
      state.todos = newTodos;
    },
    editedTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, title: action.payload.title };
        }
        return todo;
      });
    },
    comletedTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    },
  },
});

// Export the actions
export const {
  addedTodo, removedTodo, editedTodo, comletedTodo,
} = todoSlice.actions;
// Export the reducer
export default todoSlice.reducer;
