import React, { memo, useMemo } from 'react';
import TableCommonWrap from 'pages/InfoTables/MainTable/common/TableCommoWrap';
import { useAppSelector } from 'redux/hooks';
import type { FlatType } from 'redux/flats/types';
import {
  handleAllCells,
  handleSelectedAll,
  handleRowsPerPageChange,
  handlePageChange,
  handleOrderBy,
} from 'redux/flats/reducer';
import { getFlats } from 'redux/flats/thunks';
import EmptyRow from 'pages/InfoTables/MainTable/common/EmptyRow';
import TableRow from './TableRow';
import type { FlatTablePropsType } from './types';
import { COLUMN_PATH_NAMES } from '../constants';
import { getTableColumns } from './helpers';
import { useGetData } from '../hooks/useGetData';
import { useStyles } from './styles';

const FlatTable: React.FC<FlatTablePropsType> = memo(props => {
  const { hiddenColumns, onHideColumn, activeTab } = props;

  const {
    flats,
    selectedAll,
    selectedCells,
    count,
    page,
    rowsPerPage,
    orderBy,
    orderOption,
  } = useAppSelector(({ flats }) => flats);

  const classes = useStyles();

  const { error, loading, ...restGetData } = useGetData({
    thunk: getFlats,
    handleRowsPerPageChange,
    handlePageChange,
    page,
    rowsPerPage,
    orderBy,
    orderOption,
    activeTab,
    myTab: 'flats',
  });

  const renderRow = (tableRow: FlatType) => (
    <TableRow
      key={tableRow.id + tableRow.address + tableRow.floor}
      tableRow={tableRow}
      hiddenColumns={hiddenColumns}
      pathForHiddenColumnsState={COLUMN_PATH_NAMES.FLATS}
    />
  );

  const tableColumns = useMemo(() => getTableColumns({ classes }), [classes]);

  return (
    <TableCommonWrap
      tableColumns={tableColumns}
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
      orderBy={orderBy}
      orderDirection={orderOption}
      onOrderBy={handleOrderBy}
      loading={loading}
      {...restGetData}
    >
      {({ ref }) => {
        if (loading) return null;

        return flats.length && !error?.length ? (
          flats.map(renderRow)
        ) : (
          <EmptyRow
            ref={ref}
            colSpan={tableColumns.length + 1}
            title={error || '???????? ??????????????'}
          />
        );
      }}
    </TableCommonWrap>
  );
});

FlatTable.displayName = 'FlatTable';

export default FlatTable;
