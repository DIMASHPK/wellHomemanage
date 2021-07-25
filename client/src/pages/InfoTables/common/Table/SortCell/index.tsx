import React, { memo, useCallback } from 'react';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TableCell from '@material-ui/core/TableCell';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import clsx from 'clsx';
import { useStyles } from './styles';
import type { SortCellType } from './types';

const SortCell: React.FC<SortCellType> = memo(props => {
  const { title, className, isSort, onClick } = props;

  const {
    cellWrap,
    hideColumnsAction,
    hideColumnsActionIcon,
    sortColumnAction,
    sortColumnActionIcon,
    sortLabelRoot,
  } = useStyles();

  const sortIcon = useCallback(
    iconProps => (
      <IconButton className={clsx(iconProps.className, sortColumnAction)}>
        <ArrowDownwardIcon classes={{ root: sortColumnActionIcon }} />
      </IconButton>
    ),
    [sortColumnAction, sortColumnActionIcon]
  );

  return (
    <TableCell className={className}>
      {isSort ? (
        <div className={cellWrap}>
          <TableSortLabel
            classes={{ root: sortLabelRoot }}
            IconComponent={sortIcon}
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
