import React, { memo } from 'react';
import TableCommonWrap from 'pages/InfoTables/MainTable/common/TableCommoWrap';
import { useAppSelector } from 'redux/hooks';
import { handleAllCells, handleSelectedAll } from 'redux/houses/reducer';
import type { HouseType } from 'redux/houses/types';
import TableRow from './TableRow';
import type { HouseTablePropsType } from './types';
import { COLUMN_PATH_NAMES } from '../constants';
import { TABLE_COLUMNS } from './constants';

const HouseTable: React.FC<HouseTablePropsType> = memo(props => {
  const { hiddenColumns, onHideColumn } = props;

  const { houses, selectedAll, selectedCells } = useAppSelector(
    ({ houses }) => houses
  );

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
    >
      {() => houses.map(renderRow)}
    </TableCommonWrap>
  );
});

HouseTable.displayName = 'HouseTable';

export default HouseTable;
