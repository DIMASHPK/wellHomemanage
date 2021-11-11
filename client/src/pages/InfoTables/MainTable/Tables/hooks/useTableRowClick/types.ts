import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

export interface UseTableRowArgs {
  id: number | string;
  handleAddCell: ActionCreatorWithPayload<any, string>;
  handleRemoveCell: ActionCreatorWithPayload<any, string>;
  handleSelectedAll: ActionCreatorWithPayload<any, string>;
  selectedCells: number[];
}
