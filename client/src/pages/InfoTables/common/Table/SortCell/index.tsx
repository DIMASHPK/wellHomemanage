import React, { memo, useCallback, useMemo } from 'react';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TableCell from '@material-ui/core/TableCell';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import clsx from 'clsx';
import { TableCellProps } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { SORT_OPTIONS } from 'constants/apiFilters';
import { useStyles } from './styles';
import type { SortCellType } from './types';
import { SORT_DIRECTIONS } from './constants';
import { OrderOptionType } from '../../../../../api/types';

const SortCell: React.FC<SortCellType> = memo(props => {
  const {
    title,
    className,
    isSort,
    onClick,
    orderBy,
    orderDirection,
    onOrderBy,
    value,
  } = props;

  const {
    cellWrap,
    hideColumnsAction,
    hideColumnsActionIcon,
    sortColumnAction,
    sortColumnActionIcon,
    sortLabelRoot,
  } = useStyles();

  const dispatch = useDispatch();

  const sortIcon = useCallback(
    iconProps => (
      <IconButton className={clsx(iconProps.className, sortColumnAction)}>
        <ArrowDownwardIcon classes={{ root: sortColumnActionIcon }} />
      </IconButton>
    ),
    [sortColumnAction, sortColumnActionIcon]
  );

  const sortDirection = useMemo(
    () => (orderBy === value ? SORT_DIRECTIONS[orderDirection] : undefined),
    [orderBy, orderDirection, value]
  );

  const handleSort = useCallback(() => {
    let orderOption: OrderOptionType = SORT_OPTIONS.DESC;

    if (orderBy === value && orderDirection === SORT_OPTIONS.DESC) {
      orderOption = SORT_OPTIONS.ASC;
    }

    dispatch(
      onOrderBy({
        orderBy: value as string,
        orderOption,
      })
    );
  }, [dispatch, onOrderBy, orderBy, orderDirection, value]);

  return (
    <TableCell
      className={className}
      sortDirection={sortDirection as TableCellProps['sortDirection']}
    >
      {isSort ? (
        <div className={cellWrap}>
          <TableSortLabel
            active={orderBy === value}
            direction={
              (sortDirection as TableCellProps['sortDirection']) || 'asc'
            }
            classes={{ root: sortLabelRoot }}
            IconComponent={sortIcon}
            onClick={handleSort}
          >
            {title}
          </TableSortLabel>
          <IconButton
            className={hideColumnsAction}
            size="small"
            onClick={onClick}
          >
            <MoreVertIcon className={hideColumnsActionIcon} />
          </IconButton>
        </div>
      ) : (
        title
      )}
    </TableCell>
  );
});

SortCell.displayName = 'SortCell';

export default SortCell;
