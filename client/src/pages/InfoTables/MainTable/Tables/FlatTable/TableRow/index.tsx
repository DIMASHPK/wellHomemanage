import React, { memo, useCallback, useMemo } from 'react';
import TableCell from 'pages/InfoTables/common/TableCell';
import Checkbox from 'components/Checkbox';
import MuiTableRow from '@material-ui/core/TableRow';
import {
  handleAddCell,
  handleRemoveCell,
  handleSelectedAll,
} from 'redux/flats/reducer';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import clsx from 'clsx';
import { TableRowTypes } from './types';
import { useStyles } from './styles';

const TableRow: React.FC<TableRowTypes> = memo(props => {
  const { tableRow } = props;

  const {
    id,
    address,
    floor,
    numberOfStoreys,
    quantityOfRooms,
    buildingMaterial,
    typeOfHouse,
    square,
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
  } = tableRow;

  const { selectedCells } = useAppSelector(({ flats }) => flats);

  const dispatch = useAppDispatch();

  const handleClick = useCallback(() => {
    if (id && selectedCells.includes(id)) {
      dispatch(handleRemoveCell(id));

      if (selectedCells.length === 1) {
        dispatch(handleSelectedAll(false));
      }

      return;
    }

    if (id) {
      dispatch(handleAddCell(id));
      dispatch(handleSelectedAll(true));
    }
  }, [dispatch, id, selectedCells]);

  const isCheck = useMemo(
    () => selectedCells.includes(id),
    [id, selectedCells]
  );

  const {
    tableCell,
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

  return (
    <MuiTableRow key={id} className={tableRowClassName} onClick={handleClick}>
      <TableCell className={tableCell}>
        <Checkbox color="primary" checked={isCheck} />
      </TableCell>
      <TableCell className={tableCell} align="center">
        {id}
      </TableCell>
      <TableCell className={clsx(tableCell, addressCell)} align="center">
        {address}
      </TableCell>
      <TableCell className={tableCell} align="center">
        {floor}
      </TableCell>
      <TableCell className={tableCell} align="center">
        {numberOfStoreys}
      </TableCell>
      <TableCell className={tableCell} align="center">
        {quantityOfRooms}
      </TableCell>
      <TableCell className={tableCell} align="center">
        {buildingMaterial}
      </TableCell>
      <TableCell className={clsx(tableCell, typeCell)} align="center">
        {typeOfHouse}
      </TableCell>
      <TableCell className={tableCell} align="center">
        {square}
      </TableCell>
      <TableCell className={clsx(tableCell, descriptionCell)} align="center">
        {description}
      </TableCell>
      <TableCell className={tableCell} align="center">
        {price}
      </TableCell>
      <TableCell className={clsx(tableCell, perMeterCell)} align="center">
        {pricePerMeter}
      </TableCell>
      <TableCell className={tableCell} align="center">
        {commission}
      </TableCell>
      <TableCell className={clsx(tableCell, phoneCell)} align="center">
        {number}
      </TableCell>
      <TableCell className={clsx(tableCell, whoGaveCell)} align="center">
        {whoGave}
      </TableCell>
      <TableCell className={clsx(tableCell, stateOfLidCell)} align="center">
        {stateOfLid}
      </TableCell>
      <TableCell
        className={clsx(tableCell, descriptionOfClientCell)}
        align="center"
      >
        {descriptionOfClient}
      </TableCell>
      <TableCell className={tableCell} align="center">
        {managerOfObject}
      </TableCell>
      <TableCell className={tableCell} align="center">
        {dateOfStartAd}
      </TableCell>
      <TableCell className={tableCell} align="center">
        {dateOfSold}
      </TableCell>
      <TableCell className={tableCell} align="center">
        {soldPrice}
      </TableCell>
    </MuiTableRow>
  );
});

TableRow.displayName = 'TableRow';

export default TableRow;
