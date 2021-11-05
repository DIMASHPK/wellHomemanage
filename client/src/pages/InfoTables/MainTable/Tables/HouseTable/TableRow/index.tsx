import React, { memo } from 'react';
import Checkbox from 'components/Checkbox';
import MuiTableRow from '@material-ui/core/TableRow';
import { HouseType } from 'redux/houses/types';
import { useAppSelector } from 'redux/hooks';
import {
  handleAddCell,
  handleRemoveCell,
  handleSelectedAll,
} from 'redux/houses/reducer';
import { useTableRow } from 'pages/InfoTables/MainTable/Tables/hooks/useTableRow';
import { checkIsDataValid, formatDate } from 'utils/dates';
import { TableRowTypes } from './types';
import { useStyles } from './styles';

const TableRow: React.FC<TableRowTypes> = memo(props => {
  const { tableRow, hiddenColumns, pathForHiddenColumnsState } = props;

  const { selectedCells } = useAppSelector(({ houses }) => houses);

  const { reformatedRowData, renderCell, handleClick, isCheck } =
    useTableRow<HouseType>({
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
  } = reformatedRowData;

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

  if (!Object.values(reformatedRowData).length) {
    return null;
  }

  return (
    <MuiTableRow
      key={id.value}
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
      {renderCell({
        value: buildingMaterial.value,
        keyName: buildingMaterial.keyMap,
      })}
      {renderCell({
        value: area.value,
        keyName: area.keyMap,
      })}
      {renderCell({
        value: landArea.value,
        keyName: landArea.keyMap,
      })}
      {renderCell({
        value: quantityOfRooms.value,
        keyName: quantityOfRooms.keyMap,
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
        value:
          dateOfSold?.value && checkIsDataValid(dateOfSold?.value)
            ? formatDate(dateOfSold?.value)
            : '',
        keyName: dateOfStartAd?.keyMap,
      })}
      {renderCell({
        value:
          dateOfSold?.value && checkIsDataValid(dateOfSold?.value)
            ? formatDate(dateOfSold?.value)
            : '',
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
