import { createSlice } from '@reduxjs/toolkit';
import { TAB_NAMES } from 'constants/tabs';
import { ROWS_PER_PAGE_OPTIONS } from 'pages/InfoTables/common/Table/constants';
import { SORT_OPTIONS } from 'constants/apiFilters';
import type { ExclusiveState } from './types';

export const initialState: ExclusiveState = {
  [TAB_NAMES.EXCLUSIVES]: [],
  selectedCells: [],
  selectedAll: false,
  count: 0,
  page: 0,
  rowsPerPage: ROWS_PER_PAGE_OPTIONS[0],
  orderBy: 'created_at',
  orderOption: SORT_OPTIONS.DESC,
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
    setData: (state, { payload }) => {
      state[TAB_NAMES.EXCLUSIVES] = payload.data;
      state.count = payload.count;
    },
    handleRowsPerPageChange: (state, { payload }) => {
      state.rowsPerPage = payload;
    },
    handlePageChange: (state, { payload }) => {
      state.page = payload;
    },
    handleOrderBy: (state, { payload }) => {
      const { orderBy, orderOption } = payload;

      state.orderBy = orderBy;
      state.orderOption = orderOption;
    },
    handleResetSelectedCells: state => {
      state.selectedCells = [];
      state.selectedAll = false;
    },
  },
});

export const {
  handleRemoveCell,
  handleAllCells,
  handleAddCell,
  handleSelectedAll,
  setData,
  handleRowsPerPageChange,
  handlePageChange,
  handleOrderBy,
  handleResetSelectedCells,
} = exclusiveSlice.actions;

export default exclusiveSlice.reducer;
