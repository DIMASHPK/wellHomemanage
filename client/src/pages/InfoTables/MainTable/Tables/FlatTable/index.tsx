import React, { memo } from 'react';
import Table from 'pages/InfoTables/common/Table';
import { HeadColumnType } from 'pages/InfoTables/common/Table/types';
import { useAppSelector } from 'redux/hooks';
import type { FlatType } from 'redux/flats/types';
import TableRow from './TableRow';
import { useStyles } from './styles';
import HeadCheckbox from './HeadCheckbox';

const FlatTable: React.FC = memo(() => {
  const { headCell, tableContainer } = useStyles();

  const { flats } = useAppSelector(({ flats }) => flats);

  const renderRow = (tableRow: FlatType) => <TableRow tableRow={tableRow} />;

  const tableColumns: HeadColumnType[] = [
    { title: <HeadCheckbox color="primary" />, id: 0 },
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
