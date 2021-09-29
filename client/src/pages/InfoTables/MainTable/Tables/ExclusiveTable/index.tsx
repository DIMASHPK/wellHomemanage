import React, { memo } from 'react';
import TableCommonWrap from 'pages/InfoTables/MainTable/common/TableCommoWrap';
import { useAppSelector } from 'redux/hooks';
import { handleAllCells, handleSelectedAll } from 'redux/flats/reducer';
import type { ExclusiveType } from 'redux/exclusive/types';
import TableRow from './TableRow';
import type { ExclusiveTablePropsType } from './types';
import { COLUMN_PATH_NAMES } from '../constants';
import { TABLE_COLUMNS } from './constants';

const ExclusiveTable: React.FC<ExclusiveTablePropsType> = memo(props => {
  const { hiddenColumns, onHideColumn } = props;

  const { exclusives, selectedAll, selectedCells } = useAppSelector(
    ({ exclusives }) => exclusives
  );

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
    >
      {() => exclusives.map(renderRow)}
    </TableCommonWrap>
  );
});

ExclusiveTable.displayName = 'ExclusiveTable';

export default ExclusiveTable;
