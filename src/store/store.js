// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import cartReducer from './cartSlice';
import shipmentReducer from './shipmentSlice'; // Import the shipment reducer

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    shipment: shipmentReducer, // Add the shipment reducer to the store
  },
});
