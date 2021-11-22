import React, { memo, useCallback, useMemo } from 'react';
import Checkbox from 'components/Checkbox';
import MuiTableRow from '@material-ui/core/TableRow';
import { HouseType } from 'redux/houses/types';
import { useAppSelector } from 'redux/hooks';
import {
  handleAddCell,
  handleRemoveCell,
  handleSelectedAll,
} from 'redux/houses/reducer';
import { checkIsDataValid, formatDate } from 'utils/dates';
import { useTableRowClick } from 'pages/InfoTables/MainTable/Tables/hooks/useTableRowClick';
import {
  getIsCellVisible as getIsCellVisibleHelper,
  getReformattedRowData,
} from 'pages/InfoTables/MainTable/Tables/helpers';
import TableCell from 'pages/InfoTables/MainTable/common/TableCell';
import { TableRowTypes } from './types';
import { useStyles } from './styles';

const TableRow: React.FC<TableRowTypes> = memo(props => {
  const { tableRow, hiddenColumns, pathForHiddenColumnsState } = props;

  const { selectedCells } = useAppSelector(({ houses }) => houses);

  const { isCheck, handleClick } = useTableRowClick({
    id: tableRow.id,
    selectedCells,
    handleSelectedAll,
    handleAddCell,
    handleRemoveCell,
  });

  const reformattedRowData = useMemo(
    () => getReformattedRowData<HouseType>(tableRow),
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
    quantityOfRooms,
    buildingMaterial,
    area,
    description,
    price,
    pricePerMeter,
    commission,
    number,
    whoGave,
    stateOfLid,
    descriptionOfClient,
    managerOfObject,
    dateOfStartAd,
    dateOfSold,
    soldPrice,
    landArea,
  } = reformattedRowData;

  const {
    tableRow: tableRowClassName,
    addressCell,
    descriptionCell,
    phoneCell,
    perMeterCell,
    whoGaveCell,
    stateOfLidCell,
    descriptionOfClientCell,
    checkboxRoot,
  } = useStyles({ isCheck });

  if (!Object.values(reformattedRowData).length) {
    return null;
  }

  return (
    <MuiTableRow
      key={id.value}
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
      <TableCell visible={getIsCellVisible(buildingMaterial.keyMap)}>
        {buildingMaterial.value}
      </TableCell>
      <TableCell visible={getIsCellVisible(area.keyMap)}>
        {area.value}
      </TableCell>
      <TableCell visible={getIsCellVisible(landArea.keyMap)}>
        {landArea.value}
      </TableCell>
      <TableCell visible={getIsCellVisible(quantityOfRooms.keyMap)}>
        {quantityOfRooms.value}
      </TableCell>
      <TableCell
        visible={getIsCellVisible(description.keyMap)}
        className={descriptionCell}
      >
        {description.value}
      </TableCell>
      <TableCell visible={getIsCellVisible(price.keyMap)}>
        {price.value}
      </TableCell>
      <TableCell
        visible={getIsCellVisible(pricePerMeter.keyMap)}
        className={perMeterCell}
      >
        {pricePerMeter.value}
      </TableCell>
      <TableCell visible={getIsCellVisible(commission.keyMap)}>
        {commission.value}
      </TableCell>
      <TableCell
        visible={getIsCellVisible(number.keyMap)}
        className={phoneCell}
      >
        {number.value}
      </TableCell>
      <TableCell
        visible={getIsCellVisible(whoGave.keyMap)}
        className={whoGaveCell}
      >
        {whoGave.value}
      </TableCell>
      <TableCell
        visible={getIsCellVisible(stateOfLid.keyMap)}
        className={stateOfLidCell}
      >
        {stateOfLid.value}
      </TableCell>
      <TableCell
        visible={getIsCellVisible(descriptionOfClient.keyMap)}
        className={descriptionOfClientCell}
      >
        {descriptionOfClient.value}
      </TableCell>
      <TableCell visible={getIsCellVisible(managerOfObject.keyMap)}>
        {managerOfObject.value}
      </TableCell>
      <TableCell visible={getIsCellVisible(dateOfStartAd.keyMap)}>
        {dateOfStartAd?.value && checkIsDataValid(dateOfStartAd?.value)
          ? formatDate(dateOfStartAd?.value)
          : ''}
      </TableCell>
      <TableCell visible={getIsCellVisible(dateOfSold.keyMap)}>
        {dateOfSold?.value && checkIsDataValid(dateOfSold?.value)
          ? formatDate(dateOfSold?.value)
          : ''}
      </TableCell>
      <TableCell visible={getIsCellVisible(soldPrice.keyMap)}>
        {soldPrice?.value}
      </TableCell>
    </MuiTableRow>
  );
});

TableRow.displayName = 'TableRow';

export default TableRow;
