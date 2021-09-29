import React, { memo } from 'react';
import TableCommonWrap from 'pages/InfoTables/MainTable/common/TableCommoWrap';
import { useAppSelector } from 'redux/hooks';
import type { FlatType } from 'redux/flats/types';
import {
  handleAllCells,
  handleSelectedAll,
  handleRowsPerPageChange,
  handlePageChange,
} from 'redux/flats/reducer';
import { getFlats } from 'redux/flats/thunks';
import EmptyRow from 'pages/InfoTables/MainTable/common/EmptyRow';
import TableRow from './TableRow';
import type { FlatTablePropsType } from './types';
import { COLUMN_PATH_NAMES } from '../constants';
import { TABLE_COLUMNS } from './constants';
import { useGetData } from '../hooks/useGetData';

const FlatTable: React.FC<FlatTablePropsType> = memo(props => {
  const { hiddenColumns, onHideColumn } = props;

  const { flats, selectedAll, selectedCells, count, page, rowsPerPage } =
    useAppSelector(({ flats }) => flats);

  const { error, ...restGetData } = useGetData({
    thunk: getFlats,
    handleRowsPerPageChange,
    handlePageChange,
    page,
    rowsPerPage,
  });

  const renderRow = (tableRow: FlatType) => (
    <TableRow
      key={tableRow.id + tableRow.address + tableRow.floor}
      tableRow={tableRow}
      hiddenColumns={hiddenColumns}
      pathForHiddenColumnsState={COLUMN_PATH_NAMES.FLATS}
    />
  );

  return (
    <TableCommonWrap
      tableColumns={TABLE_COLUMNS}
      data={flats}
      selectedAll={selectedAll}
      selectedCells={selectedCells}
      handleAllCells={handleAllCells}
      handleSelectedAll={handleSelectedAll}
      onHideColumn={onHideColumn}
      hiddenColumns={hiddenColumns}
      pathForHiddenColumnsState={COLUMN_PATH_NAMES.FLATS}
      withPagination
      count={count}
      page={page}
      rowsPerPage={rowsPerPage}
      {...restGetData}
    >
      {({ ref }) =>
        flats.length || !error?.length ? (
          flats.map(renderRow)
        ) : (
          <EmptyRow
            ref={ref}
            colSpan={TABLE_COLUMNS.length + 1}
            title={error || 'Нету квартир'}
          />
        )}
    </TableCommonWrap>
  );
});

FlatTable.displayName = 'FlatTable';

export default FlatTable;
