import React, { memo, Ref, useRef } from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import MuiTable from '@material-ui/core/Table';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';
import TablePagination from '@material-ui/core/TablePagination';
import { useStyles } from './styles';
import { OnPageChangeType, TablePropsType } from './types';
import SortCell from './SortCell';
import { ROWS_PER_PAGE_OPTIONS } from './constants';
import TablePaginationActions from './PaginationActions';

const Table: React.FC<TablePropsType> = memo(props => {
  const {
    headColumns,
    children,
    stickyHeader,
    classes,
    loading = false,
    count = 0,
    rowsPerPage = 0,
    page = 0,
    onPageChange = () => null,
    onRowsPerPageChange = () => null,
    withPagination = false,
    orderBy,
    onOrderBy,
    orderDirection,
  } = props;

  const ref = useRef<HTMLDivElement>();

  const { toolbar, spacer, selectRoot, caption, ...styles } = useStyles({
    withPagination,
  });

  const renderLoader = () => {
    if (!loading) return null;

    return (
      <div className={styles.loaderContainer}>
        <CircularProgress color="primary" />
      </div>
    );
  };

  return (
    <div className={styles.sideContainer}>
      <TableContainer
        component={Paper}
        className={clsx(styles.tableContainer, classes?.tableContainer)}
        ref={ref}
      >
        <MuiTable className={styles.table} stickyHeader={stickyHeader}>
          <TableHead>
            <TableRow>
              {headColumns.map(({ id, ...rest }) => (
                <SortCell
                  key={id}
                  {...rest}
                  orderBy={orderBy}
                  onOrderBy={onOrderBy}
                  orderDirection={orderDirection}
                />
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {children?.({ ref: ref as Ref<HTMLDivElement> | undefined })}
          </TableBody>
        </MuiTable>
        {renderLoader()}
      </TableContainer>
      {withPagination && (
        <TablePagination
          rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
          labelRowsPerPage="Рядов на странице"
          component="div"
          className={styles.pagination}
          classes={{
            toolbar,
            spacer,
            selectRoot,
            caption,
          }}
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onPageChange as OnPageChangeType}
          onRowsPerPageChange={onRowsPerPageChange}
          ActionsComponent={TablePaginationActions}
        />
      )}
    </div>
  );
});

Table.displayName = 'Table';

export default Table;
