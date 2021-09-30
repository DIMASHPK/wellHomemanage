import { AnyAction } from '@reduxjs/toolkit';
import {
  HeadColumnType,
  TablePropsType,
} from 'pages/InfoTables/common/Table/types';
import { HideColumnsLogicType } from 'pages/InfoTables/MainTable/Tables/types';
import { getOptionalType } from 'constants/types';
import { TAB_NAMES } from 'constants/tabs';
import React from 'react';

export interface TableCommonWrapType
  extends HideColumnsLogicType,
    Omit<TablePropsType, 'headColumns' | 'stickyHeader'> {
  tableColumns: Omit<HeadColumnType, 'onClick'>[];
  data: { id: number }[];
  selectedCells: number[];
  selectedAll: boolean;
  handleAllCells: (action: number[]) => AnyAction;
  handleSelectedAll: (value: boolean) => AnyAction;
  pathForHiddenColumnsState: getOptionalType<typeof TAB_NAMES>;
  stickyHeader?: boolean;
}

export interface UsePopoverType {
  id: undefined | string;
  handleClose: () => void;
  anchorEl: HTMLDivElement | null;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  open: boolean;
}
