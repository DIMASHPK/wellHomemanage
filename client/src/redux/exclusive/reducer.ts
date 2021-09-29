import { createSlice } from '@reduxjs/toolkit';
import { TAB_NAMES } from 'constants/tabs';
import type { ExclusiveState } from './types';

export const initialState: ExclusiveState = {
  [TAB_NAMES.EXCLUSIVES]: [],
  selectedCells: [],
  selectedAll: false,
};

export const exclusiveSlice = createSlice({
  name: TAB_NAMES.EXCLUSIVES,
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
} = exclusiveSlice.actions;

export default exclusiveSlice.reducer;
