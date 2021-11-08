import React, { memo } from 'react';
import Checkbox from 'components/Checkbox';
import MuiTableRow from '@material-ui/core/TableRow';
import { ExclusiveType } from 'redux/exclusives/types';
import { useTableRow } from 'pages/InfoTables/MainTable/Tables/hooks/useTableRow';
import {
  handleAddCell,
  handleRemoveCell,
  handleSelectedAll,
} from 'redux/exclusives/reducer';
import { useAppSelector } from 'redux/hooks';
import { checkIsDataValid, formatDate } from 'utils/dates';
import { TableRowTypes } from './types';
import { useStyles } from './styles';

const TableRow: React.FC<TableRowTypes> = memo(props => {
  const { tableRow, hiddenColumns, pathForHiddenColumnsState } = props;

  const { selectedCells } = useAppSelector(({ exclusives }) => exclusives);

  const {
    reformatedRowData,
    renderCell,
    renderDatesRangeCell,
    handleClick,
    isCheck,
  } = useTableRow<ExclusiveType>({
    tableRow,
    id: tableRow.id,
    hiddenColumns,
    pathForHiddenColumnsState,
    handleAddCell,
    handleRemoveCell,
    handleSelectedAll,
    selectedCells,
  });

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
  } = reformatedRowData;

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

  if (!Object.values(reformatedRowData).length) {
    return null;
  }

  return (
    <MuiTableRow
      key={id.value as number}
      className={tableRowClassName}
      onClick={handleClick}
    >
      {renderCell({
        value: (
          <Checkbox
            color="primary"
            checked={isCheck}
            classes={{ root: checkboxRoot }}
          />
        ),
      })}
      {renderCell({ value: id.value, keyName: id.keyMap })}
      {renderCell({
        value: address.value,
        keyName: address.keyMap,
        className: addressCell,
      })}
      {renderCell({ value: typeOfHouse.value, keyName: typeOfHouse.keyMap })}
      {renderCell({ value: floor.value, keyName: floor.keyMap })}
      {renderCell({ value: area.value, keyName: area.keyMap })}
      {renderCell({
        value: description.value,
        keyName: description.keyMap,
        className: descriptionCell,
      })}
      {renderCell({ value: reservePrice.value, keyName: reservePrice.keyMap })}
      {renderCell({ value: startPrice.value, keyName: startPrice.keyMap })}
      {renderCell({ value: endPrice.value, keyName: endPrice.keyMap })}
      {renderDatesRangeCell({
        value: preSalePrepare.value,
        keyName: preSalePrepare.keyMap,
      })}
      {renderCell({
        value:
          adStart.value && checkIsDataValid(adStart.value)
            ? formatDate(adStart.value)
            : '',
        keyName: adStart.keyMap,
      })}
      {renderCell({
        value: incomingCalls.value,
        keyName: incomingCalls.keyMap,
      })}
      {renderCell({
        value: incomingSocial.value,
        keyName: incomingSocial.keyMap,
      })}
      {renderCell({
        value: crmNumberAndDescriptionOfClient.value,
        keyName: crmNumberAndDescriptionOfClient.keyMap,
        className: descriptionOfClientCell,
      })}
      {renderDatesRangeCell({
        value: watchingDays.value,
        keyName: watchingDays.keyMap,
        className: watchingDayCell,
      })}
      {renderCell({
        value: signUpForView.value,
        keyName: signUpForView.keyMap,
      })}
      {renderCell({
        value: visited.value,
        keyName: visited.keyMap,
      })}
      {renderCell({
        value: offers.value,
        keyName: offers.keyMap,
      })}
      {renderCell({
        value:
          deposit.value && checkIsDataValid(deposit.value)
            ? formatDate(deposit.value)
            : '',
        keyName: deposit.keyMap,
        className: depositCell,
      })}
      {renderCell({
        value:
          deal.value && checkIsDataValid(deal.value)
            ? formatDate(deal.value)
            : '',
        keyName: deal.keyMap,
        className: dealCell,
      })}
      {renderCell({
        value: commission.value,
        keyName: commission.keyMap,
      })}
      {renderCell({
        value: adCost.value,
        keyName: adCost.keyMap,
      })}
    </MuiTableRow>
  );
});

TableRow.displayName = 'TableRow';

export default TableRow;
