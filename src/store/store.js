import { configureStore } from '@reduxjs/toolkit';// Imports the function to set up our Redux store.
import authReducer from './authSlice';// Imports the part of the store that manages user authentication (login/registration).
import cartReducer from './cartSlice'; // Imports the part of the store that manages the shopping cart (adding/removing items).
import shipmentReducer from './shipmentSlice'; // Imports the part of our store that manages the selected shipping method.

// Sets up our central data store for the application.
export const store = configureStore({
  reducer: {
    // 'auth' 'cart' etc are parts of the store, managed by 'authReducer' & cartReducer that holds the data i.e. cartReducer holds the items in the shopping cart.
    // 'cart' is another part, managed by 'cartReducer'. It holds the items in the shopping cart.
    auth: authReducer,
    cart: cartReducer,
    shipment: shipmentReducer, 
  },
});

// 'store' is the central data manager for state. 