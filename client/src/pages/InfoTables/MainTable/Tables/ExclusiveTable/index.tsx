import React, { memo } from 'react';
import TableCommonWrap from 'pages/InfoTables/MainTable/common/TableCommoWrap';
import { useAppSelector } from 'redux/hooks';
import { handleAllCells, handleSelectedAll } from 'redux/flats/reducer';
import type { ExclusiveType } from 'redux/exclusive/types';
import { getExclusives } from 'redux/exclusive/thunks';
import {
  handlePageChange,
  handleRowsPerPageChange,
} from 'redux/exclusive/reducer';
import EmptyRow from 'pages/InfoTables/MainTable/common/EmptyRow';
import TableRow from './TableRow';
import type { ExclusiveTablePropsType } from './types';
import { COLUMN_PATH_NAMES } from '../constants';
import { TABLE_COLUMNS } from './constants';
import { useGetData } from '../hooks/useGetData';

const ExclusiveTable: React.FC<ExclusiveTablePropsType> = memo(props => {
  const { hiddenColumns, onHideColumn } = props;

  const { exclusives, selectedAll, selectedCells, count, page, rowsPerPage } =
    useAppSelector(({ exclusives }) => exclusives);

  const { error, ...restGetData } = useGetData({
    thunk: getExclusives,
    handleRowsPerPageChange,
    handlePageChange,
    page,
    rowsPerPage,
  });

  const renderRow = (tableRow: ExclusiveType) => (
    <TableRow
      key={tableRow.id + tableRow.address + tableRow.floor}
      tableRow={tableRow}
      hiddenColumns={hiddenColumns}
      pathForHiddenColumnsState={COLUMN_PATH_NAMES.EXCLUSIVES}
    />
  );

  return (
    <TableCommonWrap
      tableColumns={TABLE_COLUMNS}
      data={exclusives}
      selectedAll={selectedAll}
      selectedCells={selectedCells}
      handleAllCells={handleAllCells}
      handleSelectedAll={handleSelectedAll}
      onHideColumn={onHideColumn}
      hiddenColumns={hiddenColumns}
      pathForHiddenColumnsState={COLUMN_PATH_NAMES.EXCLUSIVES}
      withPagination
      count={count}
      page={page}
      rowsPerPage={rowsPerPage}
      {...restGetData}
    >
      {({ ref }) =>
        exclusives?.length || !error?.length ? (
          exclusives?.map(renderRow)
        ) : (
          <EmptyRow
            ref={ref}
            colSpan={TABLE_COLUMNS.length + 1}
            title={error || 'Нету эксклюзивов'}
          />
        )}
    </TableCommonWrap>
  );
});

ExclusiveTable.displayName = 'ExclusiveTable';

export default ExclusiveTable;
