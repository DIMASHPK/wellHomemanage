import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorageValue } from 'utils/helpers';
import { UserStateType } from './types';

export const initialState: UserStateType = {
  data: {
    userName: null,
    token: getLocalStorageValue<string>('token'),
    tokenExpiredDate: getLocalStorageValue<string>('isTokenExpired'),
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, { payload }) => {
      state.data = payload;
    },
    setTokenData: (state, { payload }) => {
      state.data = { ...state.data, ...payload };
    },
  },
});

export const { setUserData, setTokenData } = userSlice.actions;

export default userSlice.reducer;
