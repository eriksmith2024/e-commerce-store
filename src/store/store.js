// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Updated import path

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});