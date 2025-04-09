// src/store/shipmentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedMethod: null,
};

export const shipmentSlice = createSlice({
  name: 'shipment',
  initialState,
  reducers: {
    setShipmentMethod: (state, action) => {
      state.selectedMethod = action.payload;
    },
    clearShipmentMethod: (state) => {
      state.selectedMethod = null;
    },
  },
});

export const { setShipmentMethod, clearShipmentMethod } = shipmentSlice.actions;
export default shipmentSlice.reducer;