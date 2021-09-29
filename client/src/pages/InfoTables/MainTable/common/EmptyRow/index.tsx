import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import React, { RefObject } from 'react';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { useStyles } from './styles';
import { EmptyRowTypes } from './types';

const EmptyRow = React.forwardRef<HTMLDivElement, EmptyRowTypes>(
  (props, ref) => {
    const { title, colSpan, className } = props;

    const { tableCell, wrapper } = useStyles({
      ref: ref as RefObject<HTMLDivElement>,
    });

    return (
      <TableRow className={clsx(className)}>
        <TableCell className={tableCell} colSpan={colSpan}>
          <div className={wrapper}>
            <Typography variant="h5">{title}</Typography>
          </div>
        </TableCell>
      </TableRow>
    );
  }
);

EmptyRow.displayName = 'EmptyRow';

export default EmptyRow;
