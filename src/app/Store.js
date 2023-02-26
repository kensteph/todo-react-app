import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
// Configure & export our store
const store = configureStore({ reducer: { todoReducer } });

export default store;
