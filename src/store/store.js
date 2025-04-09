// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import cartReducer from './cartSlice'; // Import the cart reducer

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer, // Add the cart reducer to the store
  },
});

