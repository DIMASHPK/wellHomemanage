import { PayloadAction } from '@reduxjs/toolkit';

export interface commonReducerType {
  selectedCells: number[];
  selectedAll: boolean;
}

export interface ReturnReducerType<T extends commonReducerType> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: (state: T, action: PayloadAction<any>) => void;
}
