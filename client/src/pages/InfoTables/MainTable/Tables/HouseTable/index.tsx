import React, { memo, useMemo } from 'react';
import TableCommonWrap from 'pages/InfoTables/MainTable/common/TableCommoWrap';
import { useAppSelector } from 'redux/hooks';
import {
  handleAllCells,
  handleSelectedAll,
  handlePageChange,
  handleRowsPerPageChange,
  handleOrderBy,
} from 'redux/houses/reducer';
import type { HouseType } from 'redux/houses/types';
import { getHouses } from 'redux/houses/thunks';
import EmptyRow from 'pages/InfoTables/MainTable/common/EmptyRow';
import TableRow from './TableRow';
import type { HouseTablePropsType } from './types';
import { COLUMN_PATH_NAMES } from '../constants';
import { getTableColumns } from './helpers';
import { useGetData } from '../hooks/useGetData';
import { useStyles } from './styles';

const HouseTable: React.FC<HouseTablePropsType> = memo(props => {
  const { hiddenColumns, onHideColumn, activeTab } = props;

  const {
    houses,
    selectedAll,
    selectedCells,
    count,
    page,
    rowsPerPage,
    orderBy,
    orderOption,
  } = useAppSelector(({ houses }) => houses);

  const classes = useStyles();

  const { error, loading, ...restGetData } = useGetData({
    thunk: getHouses,
    handleRowsPerPageChange,
    handlePageChange,
    page,
    rowsPerPage,
    orderBy,
    orderOption,
    activeTab,
    myTab: 'houses',
  });

  const renderRow = (tableRow: HouseType) => (
    <TableRow
      key={tableRow.id + tableRow.address + tableRow.quantityOfRooms}
      tableRow={tableRow}
      hiddenColumns={hiddenColumns}
      pathForHiddenColumnsState={COLUMN_PATH_NAMES.HOUSES}
    />
  );

  const tableColumns = useMemo(() => getTableColumns({ classes }), [classes]);

  return (
    <TableCommonWrap
      tableColumns={tableColumns}
      data={houses}
      selectedAll={selectedAll}
      selectedCells={selectedCells}
      handleAllCells={handleAllCells}
      handleSelectedAll={handleSelectedAll}
      hiddenColumns={hiddenColumns}
      onHideColumn={onHideColumn}
      pathForHiddenColumnsState={COLUMN_PATH_NAMES.HOUSES}
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

        return houses?.length && !error?.length ? (
          houses?.map(renderRow)
        ) : (
          <EmptyRow
            ref={ref}
            colSpan={tableColumns.length + 1}
            title={error || 'Нету домов'}
          />
        );
      }}
    </TableCommonWrap>
  );
});

HouseTable.displayName = 'HouseTable';

export default HouseTable;
