// src/store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
  username: localStorage.getItem('loggedInUsername') || null,
  firstName: localStorage.getItem('loggedInFirstName') || null,
  lastName: localStorage.getItem('loggedInLastName') || null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload.username;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('loggedInUsername', action.payload.username);
      localStorage.setItem('loggedInFirstName', action.payload.firstName);
      localStorage.setItem('loggedInLastName', action.payload.lastName);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = null;
      state.firstName = null;
      state.lastName = null;
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('loggedInUsername');
      localStorage.removeItem('loggedInFirstName');
      localStorage.removeItem('loggedInLastName');
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;