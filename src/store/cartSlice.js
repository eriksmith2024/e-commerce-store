import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array to store cart items
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
        state.items.push(newItem);
      } else {
        state.items.push(newItem);
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