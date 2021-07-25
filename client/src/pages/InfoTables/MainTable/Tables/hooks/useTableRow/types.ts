import {
  ColumnPathNamesType,
  HideColumnsLogicType,
} from 'pages/InfoTables/MainTable/Tables/types';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

export interface RenderCellArgsType {
  keyName?: string;
  value?: JSX.Element | string | number;
  className?: string;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface UseTableRowArgsType<T> {
  tableRow: T;
  id: number | string;
  hiddenColumns: HideColumnsLogicType['hiddenColumns'];
  pathForHiddenColumnsState:
    | ColumnPathNamesType['FLATS']
    | ColumnPathNamesType['HOUSES'];
  handleAddCell: ActionCreatorWithPayload<any, string>;
  handleRemoveCell: ActionCreatorWithPayload<any, string>;
  handleSelectedAll: ActionCreatorWithPayload<any, string>;
  selectedCells: number[];
}

export type ReformatedRowDataType<T> = {
  [Property in keyof T]: { keyMap: Property; value: T[Property] };
};

export interface UseTableRowReturnType<T> {
  reformatedRowData: ReformatedRowDataType<T>;
  handleClick: () => void;
  isCheck: boolean;
  renderCell: (data: RenderCellArgsType) => JSX.Element;
}
