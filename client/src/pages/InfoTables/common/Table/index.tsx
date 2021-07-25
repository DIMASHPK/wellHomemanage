import React, { memo } from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import MuiTable from '@material-ui/core/Table';
import clsx from 'clsx';
import { useStyles } from './styles';
import { TablePropsType } from './types';
import SortCell from './SortCell';

const Table: React.FC<TablePropsType> = memo(props => {
  const { headColumns, children, stickyHeader, classes } = props;

  const styles = useStyles();

  return (
    <div className={styles.sideContainer}>
      <TableContainer
        component={Paper}
        className={clsx(styles.tableContainer, classes?.tableContainer)}
      >
        <MuiTable className={styles.table} stickyHeader={stickyHeader}>
          <TableHead>
            <TableRow>
              {headColumns.map(({ id, ...rest }) => (
                <SortCell key={id} {...rest} />
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{children}</TableBody>
        </MuiTable>
      </TableContainer>
    </div>
  );
});

Table.displayName = 'Table';

export default Table;
