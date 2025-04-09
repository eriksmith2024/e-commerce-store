// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.title === newItem.title && item.color === newItem.color
      );

      if (existingItemIndex >= 0) {
        // If the item exists, update the quantity (assuming you want to do this)
        state.items[existingItemIndex] = {
          ...state.items[existingItemIndex],
          quantity: (state.items[existingItemIndex].quantity || 0) + 1,
        };
      } else {
        // If it doesn't exist, add it to the cart with quantity 1
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const itemToRemove = action.payload;
      state.items = state.items.filter(
        (item) => !(item.title === itemToRemove.title && item.color === itemToRemove.color)
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
