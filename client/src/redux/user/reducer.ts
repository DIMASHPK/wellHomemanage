import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorageValue } from 'utils/helpers';
import { UserStateType } from './types';

export const initialState: UserStateType = {
  data: {
    username: null,
    accessToken: getLocalStorageValue<string>('accessToken'),
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, { payload }) => {
      state.data = { ...state.data, ...payload };
    },
    removeUserData: state => {
      state.data = { username: null, accessToken: null };
    },
  },
});

export const { setUserData, removeUserData } = userSlice.actions;

export default userSlice.reducer;
