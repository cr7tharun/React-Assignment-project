import { createSlice } from '@reduxjs/toolkit';

// Get stored data safely from localStorage
const getStoredUserData = () => {
  try {
    const storedUser = localStorage.getItem('userData');
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error('Error parsing localStorage data:', error);
    return null;
  }
};

// Initial state
const initialState = {
  user: getStoredUserData() || {
    id: '',
    name: '',
    address: '',
    email: '',
    phone: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUserData: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('userData', JSON.stringify(action.payload)); // Sync with localStorage
    },
  },
});

export const { saveUserData } = userSlice.actions;
export default userSlice.reducer;
