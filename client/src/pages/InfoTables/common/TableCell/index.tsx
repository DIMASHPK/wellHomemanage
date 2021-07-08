import MuiTableCell from '@material-ui/core/TableCell';
import React, { memo } from 'react';
import clsx from 'clsx';
import { useStyles } from './styles';
import type { TableCellType } from './types';

const TableCell: React.FC<TableCellType> = memo(props => {
  const { children, classes, ...restProps } = props;

  const { root } = useStyles();

  return (
    <MuiTableCell classes={{ root: clsx(root, classes?.root) }} {...restProps}>
      {children}
    </MuiTableCell>
  );
});

TableCell.displayName = 'TableCell';

export default TableCell;
