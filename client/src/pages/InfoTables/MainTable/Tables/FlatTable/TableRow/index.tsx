import React, { memo } from 'react';
import Checkbox from 'components/Checkbox';
import MuiTableRow from '@material-ui/core/TableRow';
import { FlatType } from 'redux/flats/types';
import { useTableRow } from 'pages/InfoTables/MainTable/Tables/hooks/useTableRow';
import {
  handleAddCell,
  handleRemoveCell,
  handleSelectedAll,
} from 'redux/flats/reducer';
import { useAppSelector } from 'redux/hooks';
import { TableRowTypes } from './types';
import { useStyles } from './styles';

const TableRow: React.FC<TableRowTypes> = memo(props => {
  const { tableRow, hiddenColumns, pathForHiddenColumnsState } = props;

  const { selectedCells } = useAppSelector(({ flats }) => flats);

  const { reformatedRowData, renderCell, handleClick, isCheck } =
    useTableRow<FlatType>({
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
    floor,
    numberOfStoreys,
    quantityOfRooms,
    buildingMaterial,
    typeOfHouse,
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
  } = reformatedRowData;

  const {
    tableRow: tableRowClassName,
    addressCell,
    typeCell,
    descriptionCell,
    phoneCell,
    perMeterCell,
    whoGaveCell,
    stateOfLidCell,
    descriptionOfClientCell,
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
      {renderCell({ value: <Checkbox color="primary" checked={isCheck} /> })}
      {renderCell({ value: id.value, keyName: id.keyMap })}
      {renderCell({
        value: address.value,
        keyName: address.keyMap,
        className: addressCell,
      })}
      {renderCell({
        value: floor.value,
        keyName: floor.keyMap,
      })}
      {renderCell({
        value: numberOfStoreys.value,
        keyName: numberOfStoreys.keyMap,
      })}
      {renderCell({
        value: quantityOfRooms.value,
        keyName: quantityOfRooms.keyMap,
      })}
      {renderCell({
        value: buildingMaterial.value,
        keyName: buildingMaterial.keyMap,
      })}
      {renderCell({
        value: typeOfHouse.value,
        keyName: typeOfHouse.keyMap,
        className: typeCell,
      })}
      {renderCell({
        value: area.value,
        keyName: area.keyMap,
      })}
      {renderCell({
        value: description.value,
        keyName: description.keyMap,
        className: descriptionCell,
      })}
      {renderCell({
        value: price.value,
        keyName: price.keyMap,
      })}
      {renderCell({
        value: pricePerMeter.value,
        keyName: pricePerMeter.keyMap,
        className: perMeterCell,
      })}
      {renderCell({
        value: commission.value,
        keyName: commission.keyMap,
      })}
      {renderCell({
        value: number.value,
        keyName: number.keyMap,
        className: phoneCell,
      })}
      {renderCell({
        value: whoGave.value,
        keyName: whoGave.keyMap,
        className: whoGaveCell,
      })}
      {renderCell({
        value: stateOfLid.value,
        keyName: stateOfLid.keyMap,
        className: stateOfLidCell,
      })}
      {renderCell({
        value: descriptionOfClient.value,
        keyName: descriptionOfClient.keyMap,
        className: descriptionOfClientCell,
      })}
      {renderCell({
        value: managerOfObject.value,
        keyName: managerOfObject.keyMap,
      })}
      {renderCell({
        value: dateOfStartAd?.value,
        keyName: dateOfStartAd?.keyMap,
      })}
      {renderCell({
        value: dateOfSold?.value,
        keyName: dateOfSold?.keyMap,
      })}
      {renderCell({
        value: soldPrice?.value,
        keyName: soldPrice?.keyMap,
      })}
    </MuiTableRow>
  );
});

TableRow.displayName = 'TableRow';

export default TableRow;
