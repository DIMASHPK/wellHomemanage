import { AnyAction } from '@reduxjs/toolkit';
import { HeadColumnType } from 'pages/InfoTables/common/Table/types';
import {
  ColumnPathNamesType,
  HideColumnsLogicType,
} from 'pages/InfoTables/MainTable/Tables/types';

export interface TableCommonWrapType extends HideColumnsLogicType {
  tableColumns: Omit<HeadColumnType, 'onClick'>[];
  data: { id: number }[];
  selectedCells: number[];
  selectedAll: boolean;
  handleAllCells: (action: number[]) => AnyAction;
  handleSelectedAll: (value: boolean) => AnyAction;
  pathForHiddenColumnsState:
    | ColumnPathNamesType['FLATS']
    | ColumnPathNamesType['HOUSES']
    | ColumnPathNamesType['EXCLUSIVES'];
}
