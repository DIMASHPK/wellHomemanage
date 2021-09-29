import { createSlice } from '@reduxjs/toolkit';
import { TAB_NAMES } from 'constants/tabs';
import type { FlatsState } from './types';

export const initialState: FlatsState = {
  [TAB_NAMES.FLATS]: [],
  selectedCells: [],
  selectedAll: false,
  count: 0,
};

export const flatsSlice = createSlice({
  name: 'flats',
  initialState,
  reducers: {
    handleAddCell: (state, action) => {
      const { payload } = action;

      state.selectedCells.push(payload);
    },
    handleRemoveCell: (state, action) => {
      const { payload } = action;

      state.selectedCells = state.selectedCells.filter(
        item => item !== payload
      );
    },
    handleAllCells: (state, action) => {
      const { payload } = action;

      state.selectedCells = payload;
    },
    handleSelectedAll: (state, action) => {
      const { payload } = action;

      state.selectedAll = payload;
    },
    setData: (state, { payload }) => {
      state[TAB_NAMES.FLATS] = payload.data;
      state.count = payload.count;
    },
  },
});

export const {
  handleRemoveCell,
  handleAllCells,
  handleAddCell,
  handleSelectedAll,
  setData,
} = flatsSlice.actions;

export default flatsSlice.reducer;
