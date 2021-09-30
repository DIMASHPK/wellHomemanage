import { AppThunk } from 'redux/types';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { TablePropsType } from 'pages/InfoTables/common/Table/types';
import { OrderOptionType } from 'api/types';

export interface UseGetDataHookArgsType {
  thunk: () => AppThunk;
  handleRowsPerPageChange: ActionCreatorWithPayload<number, string>;
  handlePageChange: ActionCreatorWithPayload<number, string>;
  page?: number;
  rowsPerPage?: number;
  orderBy: string;
  orderOption: OrderOptionType;
}

export interface UseGetDataHookReturnType {
  error: string;
  loading: boolean;
  onPageChange: TablePropsType['onPageChange'];
  onRowsPerPageChange: TablePropsType['onRowsPerPageChange'];
}
