/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    local: 'en',
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    setLocal: (state, action) => {
      state.local = action.payload;
    },
  },
});

export const { login, setLocal } = userSlice.actions;

export default userSlice.reducer;
