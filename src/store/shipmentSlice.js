import { createSlice } from '@reduxjs/toolkit';// Imports the function to create a section of our Redux store.

const initialState = {
  selectedMethod: null,// Initially, no shipment method is selected.
};

// Creates a 'slice' of our Redux store specifically for shipment information.
export const shipmentSlice = createSlice({
  name: 'shipment',// The name of this section in the Redux store.
  initialState,// The starting data for this section.
  reducers: {// Functions that tell Redux how to update this part of the store.
    setShipmentMethod: (state, action) => {// A function to set the selected shipment method.
      state.selectedMethod = action.payload;// Updates the 'selectedMethod' with the data that was sent along with this action.
    },
    clearShipmentMethod: (state) => {// A function to clear the selected shipment method.
      state.selectedMethod = null;// Sets 'selectedMethod' back to its initial value (null).
    },
  },
});

export const { setShipmentMethod, clearShipmentMethod } = shipmentSlice.actions;

export default shipmentSlice.reducer;