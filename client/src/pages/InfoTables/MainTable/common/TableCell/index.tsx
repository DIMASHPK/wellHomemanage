import React, { memo } from 'react';
import clsx from 'clsx';
import CommonTableCell from 'pages/InfoTables/common/TableCell';
import { useStyles } from './styles';
import { TableCellPropsType } from './types';

const TableCell: React.FC<TableCellPropsType> = memo(props => {
  const { children, className, visible = true } = props;

  const { tableCell } = useStyles();

  return (
    <>
      {visible && (
        <CommonTableCell className={clsx(tableCell, className)} align="center">
          {children}
        </CommonTableCell>
      )}
    </>
  );
});

TableCell.displayName = 'TableCell';

export default TableCell;
