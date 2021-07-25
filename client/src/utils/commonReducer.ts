import { PayloadAction } from '@reduxjs/toolkit';
import type { ReturnReducerType, commonReducerType } from './types';

export default <T extends commonReducerType>(): ReturnReducerType<T> => ({
  handleAddCell: (state: T, action: PayloadAction<number>) => {
    const { payload } = action;

    state.selectedCells.push(payload);
  },
  handleRemoveCell: (state: T, action: PayloadAction<number>) => {
    const { payload } = action;

    state.selectedCells = state.selectedCells.filter(item => item !== payload);
  },
  handleAllCells: (state: T, action: PayloadAction<number[]>) => {
    const { payload } = action;

    state.selectedCells = payload;
  },
  handleSelectedAll: (state: T, action: PayloadAction<boolean>) => {
    const { payload } = action;

    state.selectedAll = payload;
  },
});
