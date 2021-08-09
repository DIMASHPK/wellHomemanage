import { AnyAction } from '@reduxjs/toolkit';
import { HeadColumnType } from 'pages/InfoTables/common/Table/types';
import { HideColumnsLogicType } from 'pages/InfoTables/MainTable/Tables/types';
import { getOptionalType } from 'constants/types';
import { TAB_NAMES } from 'constants/tabs';

export interface TableCommonWrapType extends HideColumnsLogicType {
  tableColumns: Omit<HeadColumnType, 'onClick'>[];
  data: { id: number }[];
  selectedCells: number[];
  selectedAll: boolean;
  handleAllCells: (action: number[]) => AnyAction;
  handleSelectedAll: (value: boolean) => AnyAction;
  pathForHiddenColumnsState: getOptionalType<typeof TAB_NAMES>;
}
