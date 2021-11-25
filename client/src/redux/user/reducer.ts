import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorageValue } from 'utils/helpers';
import { UserStateType } from './types';

export const initialState: UserStateType = {
  data: {
    username: null,
    accessToken: getLocalStorageValue<string>('accessToken'),
    expiresIn: getLocalStorageValue<string>('expiresIn'),
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, { payload }) => {
      state.data = { ...state.data, ...payload };
    },
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
