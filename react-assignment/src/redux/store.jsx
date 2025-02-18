import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Ensure correct import path

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
