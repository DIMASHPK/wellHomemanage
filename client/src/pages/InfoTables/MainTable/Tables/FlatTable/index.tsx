import React, { memo } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '../../../common/TableCell';
import Table from '../../../common/Table';
import { HeadColumnType } from '../../../common/Table/types';
import { useStyles } from './styles';
import { useAppSelector } from '../../../../../redux/hooks';
import type { FlatType } from '../../../../../redux/flats/types';
import Checkbox from '../../../../../components/Checkbox';
import HeadCheckbox from './HeadCheckbox';

const FlatTable: React.FC = memo(() => {
  const { headCell, tableCell, tableContainer } = useStyles();

  const { flats } = useAppSelector(({ flats }) => flats);

  const renderRow = (tableRow: FlatType) => {
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
      whoGive,
      stateOfLid,
      descriptionOfClient,
      managerOfObject,
      dateOfStartAd,
      dateOfSold,
      soldPrice,
    } = tableRow;

    return (
      <TableRow key={id}>
        <TableCell className={tableCell}>
          <Checkbox cellId={id} />
        </TableCell>
        <TableCell className={tableCell} align="center">
          {id}
        </TableCell>
        <TableCell className={tableCell} align="center">
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
        <TableCell className={tableCell} align="center">
          {typeOfHouse}
        </TableCell>
        <TableCell className={tableCell} align="center">
          {square}
        </TableCell>
        <TableCell className={tableCell} align="center">
          {description}
        </TableCell>
        <TableCell className={tableCell} align="center">
          {price}
        </TableCell>
        <TableCell className={tableCell} align="center">
          {pricePerMeter}
        </TableCell>
        <TableCell className={tableCell} align="center">
          {commission}
        </TableCell>
        <TableCell className={tableCell} align="center">
          {number}
        </TableCell>
        <TableCell className={tableCell} align="center">
          {whoGive}
        </TableCell>
        <TableCell className={tableCell} align="center">
          {stateOfLid}
        </TableCell>
        <TableCell className={tableCell} align="center">
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
      </TableRow>
    );
  };

  const tableColumns: HeadColumnType[] = [
    { title: <HeadCheckbox />, id: 0 },
    { id: 1, title: '№' },
    { id: 2, title: 'адрес' },
    { id: 3, title: 'этаж' },
    { id: 4, title: 'этажность' },
    { id: 5, title: 'количество комнат' },
    { id: 6, title: 'материал' },
    { id: 7, title: 'тип' },
    { id: 8, title: 'площадь' },
    { id: 9, title: 'описание' },
    { id: 10, title: 'цена' },
    { id: 11, title: 'цена 1м' },
    { id: 12, title: 'коммисия' },
    { id: 13, title: 'контакт' },
    { id: 14, title: 'от кого' },
    { id: 15, title: 'состаяние лида' },
    { id: 16, title: 'характеристика клиента' },
    { id: 17, title: 'куратор объекта' },
    { id: 18, title: 'начало рекламы' },
    { id: 19, title: 'дата продажи' },
    { id: 20, title: 'цена продажи' },
  ].map(item => ({ ...item, className: headCell }));

  return (
    <Table stickyHeader headColumns={tableColumns} classes={{ tableContainer }}>
      {flats.map(renderRow)}
    </Table>
  );
});

FlatTable.displayName = 'FlatTable';

export default FlatTable;
