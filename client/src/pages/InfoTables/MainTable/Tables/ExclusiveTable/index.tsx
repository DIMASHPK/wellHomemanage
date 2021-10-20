import React, { memo } from 'react';
import TableCommonWrap from 'pages/InfoTables/MainTable/common/TableCommoWrap';
import { useAppSelector } from 'redux/hooks';
import type { ExclusiveType } from 'redux/exclusives/types';
import { getExclusives } from 'redux/exclusives/thunks';
import {
  handleAllCells,
  handleSelectedAll,
  handleRowsPerPageChange,
  handlePageChange,
  handleOrderBy,
} from 'redux/exclusives/reducer';
import EmptyRow from 'pages/InfoTables/MainTable/common/EmptyRow';
import TableRow from './TableRow';
import type { ExclusiveTablePropsType } from './types';
import { COLUMN_PATH_NAMES } from '../constants';
import { TABLE_COLUMNS } from './constants';
import { useGetData } from '../hooks/useGetData';

const ExclusiveTable: React.FC<ExclusiveTablePropsType> = memo(props => {
  const { hiddenColumns, onHideColumn, activeTab } = props;

  const {
    exclusives,
    selectedAll,
    selectedCells,
    count,
    page,
    rowsPerPage,
    orderBy,
    orderOption,
  } = useAppSelector(({ exclusives }) => exclusives);

  const { error, ...restGetData } = useGetData({
    thunk: getExclusives,
    handleRowsPerPageChange,
    handlePageChange,
    page,
    rowsPerPage,
    orderBy,
    orderOption,
    activeTab,
    myTab: 'exclusives',
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
      orderBy={orderBy}
      orderDirection={orderOption}
      onOrderBy={handleOrderBy}
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
        )
      }
    </TableCommonWrap>
  );
});

ExclusiveTable.displayName = 'ExclusiveTable';

export default ExclusiveTable;
