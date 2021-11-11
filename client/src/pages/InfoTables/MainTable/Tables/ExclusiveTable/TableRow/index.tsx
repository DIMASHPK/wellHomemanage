import React, { memo, useCallback, useMemo } from 'react';
import Checkbox from 'components/Checkbox';
import MuiTableRow from '@material-ui/core/TableRow';
import { ExclusiveType } from 'redux/exclusives/types';
import {
  handleAddCell,
  handleRemoveCell,
  handleSelectedAll,
} from 'redux/exclusives/reducer';
import { useAppSelector } from 'redux/hooks';
import { checkIsDataValid, formatDate } from 'utils/dates';
import { useTableRowClick } from 'pages/InfoTables/MainTable/Tables/hooks/useTableRowClick';
import {
  getIsCellVisible as getIsCellVisibleHelper,
  getReformattedRowData,
} from 'pages/InfoTables/MainTable/Tables/helpers';
import TableCell from 'pages/InfoTables/MainTable/common/TableCell';
import TableRangeCell from 'pages/InfoTables/MainTable/common/TableRangeCell';
import { TableRowTypes } from './types';
import { useStyles } from './styles';

const TableRow: React.FC<TableRowTypes> = memo(props => {
  const { tableRow, hiddenColumns, pathForHiddenColumnsState } = props;

  const { selectedCells } = useAppSelector(({ exclusives }) => exclusives);

  const { isCheck, handleClick } = useTableRowClick({
    id: tableRow.id,
    selectedCells,
    handleSelectedAll,
    handleAddCell,
    handleRemoveCell,
  });

  const reformattedRowData = useMemo(
    () => getReformattedRowData<ExclusiveType>(tableRow),
    [tableRow]
  );

  const getIsCellVisible = useCallback(
    (keyName: string) =>
      getIsCellVisibleHelper({
        keyName,
        pathForHiddenColumnsState,
        hiddenColumns,
      }),
    [hiddenColumns, pathForHiddenColumnsState]
  );

  const {
    id,
    address,
    typeOfHouse,
    floor,
    area,
    description,
    reservePrice,
    startPrice,
    endPrice,
    preSalePrepare,
    adStart,
    incomingCalls,
    incomingSocial,
    crmNumberAndDescriptionOfClient,
    watchingDays,
    signUpForView,
    visited,
    offers,
    deposit,
    deal,
    commission,
    adCost,
  } = reformattedRowData;

  const {
    tableRow: tableRowClassName,
    addressCell,
    descriptionCell,
    descriptionOfClientCell,
    watchingDayCell,
    checkboxRoot,
    depositCell,
    dealCell,
  } = useStyles({ isCheck });

  if (!Object.values(reformattedRowData).length) {
    return null;
  }

  return (
    <MuiTableRow
      key={id.value as number}
      className={tableRowClassName}
      onClick={handleClick}
    >
      <TableCell>
        <Checkbox
          color="primary"
          checked={isCheck}
          classes={{ root: checkboxRoot }}
        />
      </TableCell>
      <TableCell visible={getIsCellVisible(id.keyMap)}>{id.value}</TableCell>
      <TableCell
        visible={getIsCellVisible(address.keyMap)}
        className={addressCell}
      >
        {address.value}
      </TableCell>
      <TableCell visible={getIsCellVisible(typeOfHouse.keyMap)}>
        {typeOfHouse.value}
      </TableCell>
      <TableCell visible={getIsCellVisible(floor.keyMap)}>
        {floor.value}
      </TableCell>
      <TableCell visible={getIsCellVisible(area.keyMap)}>
        {area.value}
      </TableCell>
      <TableCell
        visible={getIsCellVisible(description.keyMap)}
        className={descriptionCell}
      >
        {description.value}
      </TableCell>
      <TableCell visible={getIsCellVisible(reservePrice.keyMap)}>
        {reservePrice.value}
      </TableCell>
      <TableCell visible={getIsCellVisible(startPrice.keyMap)}>
        {startPrice.value}
      </TableCell>
      <TableCell visible={getIsCellVisible(endPrice.keyMap)}>
        {endPrice.value}
      </TableCell>
      <TableRangeCell
        visible={getIsCellVisible(preSalePrepare.keyMap)}
        value={preSalePrepare.value}
      />
      <TableCell visible={getIsCellVisible(adStart.keyMap)}>
        {adStart.value && checkIsDataValid(adStart.value)
          ? formatDate(adStart.value)
          : ''}
      </TableCell>
      <TableCell visible={getIsCellVisible(incomingCalls.keyMap)}>
        {incomingCalls.value}
      </TableCell>
      <TableCell visible={getIsCellVisible(incomingSocial.keyMap)}>
        {incomingSocial.value}
      </TableCell>
      <TableCell
        visible={getIsCellVisible(crmNumberAndDescriptionOfClient.keyMap)}
        className={descriptionOfClientCell}
      >
        {crmNumberAndDescriptionOfClient.value}
      </TableCell>
      <TableRangeCell
        visible={getIsCellVisible(watchingDays.keyMap)}
        className={watchingDayCell}
        value={watchingDays.value}
      />
      <TableCell visible={getIsCellVisible(signUpForView.keyMap)}>
        {signUpForView.value}
      </TableCell>
      <TableCell visible={getIsCellVisible(visited.keyMap)}>
        {visited.value}
      </TableCell>
      <TableCell visible={getIsCellVisible(offers.keyMap)}>
        {offers.value}
      </TableCell>
      <TableCell
        visible={getIsCellVisible(deposit.keyMap)}
        className={depositCell}
      >
        {deposit.value && checkIsDataValid(deposit.value)
          ? formatDate(deposit.value)
          : ''}
      </TableCell>
      <TableCell visible={getIsCellVisible(deal.keyMap)} className={dealCell}>
        {deal.value && checkIsDataValid(deal.value)
          ? formatDate(deal.value)
          : ''}
      </TableCell>
      <TableCell visible={getIsCellVisible(commission.keyMap)}>
        {commission.value}
      </TableCell>
      <TableCell visible={getIsCellVisible(adCost.keyMap)}>
        {adCost.value}
      </TableCell>
    </MuiTableRow>
  );
});

TableRow.displayName = 'TableRow';

export default TableRow;
