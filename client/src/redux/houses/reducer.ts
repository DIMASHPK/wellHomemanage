import { createSlice } from '@reduxjs/toolkit';
import { TAB_NAMES } from 'constants/tabs';
import type { HousesStateType } from './types';

export const initialState: HousesStateType = {
  [TAB_NAMES.HOUSES]: [],
  selectedCells: [],
  selectedAll: false,
};

export const housesSlice = createSlice({
  name: TAB_NAMES.HOUSES,
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
  },
});

export const {
  handleRemoveCell,
  handleAllCells,
  handleAddCell,
  handleSelectedAll,
} = housesSlice.actions;

export default housesSlice.reducer;
