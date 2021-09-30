import React, { memo } from 'react';
import TableCommonWrap from 'pages/InfoTables/MainTable/common/TableCommoWrap';
import { useAppSelector } from 'redux/hooks';
import {
  handleAllCells,
  handleSelectedAll,
  handlePageChange,
  handleRowsPerPageChange,
} from 'redux/houses/reducer';
import type { HouseType } from 'redux/houses/types';
import { getHouses } from 'redux/houses/thunks';
import EmptyRow from 'pages/InfoTables/MainTable/common/EmptyRow';
import TableRow from './TableRow';
import type { HouseTablePropsType } from './types';
import { COLUMN_PATH_NAMES } from '../constants';
import { TABLE_COLUMNS } from './constants';
import { useGetData } from '../hooks/useGetData';

const HouseTable: React.FC<HouseTablePropsType> = memo(props => {
  const { hiddenColumns, onHideColumn } = props;

  const { houses, selectedAll, selectedCells, count, page, rowsPerPage } =
    useAppSelector(({ houses }) => houses);

  const { error, ...restGetData } = useGetData({
    thunk: getHouses,
    handleRowsPerPageChange,
    handlePageChange,
    page,
    rowsPerPage,
  });

  const renderRow = (tableRow: HouseType) => (
    <TableRow
      key={tableRow.id + tableRow.address + tableRow.quantityOfRooms}
      tableRow={tableRow}
      hiddenColumns={hiddenColumns}
      pathForHiddenColumnsState={COLUMN_PATH_NAMES.HOUSES}
    />
  );

  return (
    <TableCommonWrap
      tableColumns={TABLE_COLUMNS}
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
      {...restGetData}
    >
      {({ ref }) =>
        houses?.length || !error?.length ? (
          houses?.map(renderRow)
        ) : (
          <EmptyRow
            ref={ref}
            colSpan={TABLE_COLUMNS.length + 1}
            title={error || 'Нету домов'}
          />
        )
      }
    </TableCommonWrap>
  );
});

HouseTable.displayName = 'HouseTable';

export default HouseTable;
