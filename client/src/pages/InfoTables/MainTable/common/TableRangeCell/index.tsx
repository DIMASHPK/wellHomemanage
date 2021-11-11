import React, { memo } from 'react';
import Zoom from '@material-ui/core/Zoom';
import Tooltip from '@material-ui/core/Tooltip';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import { formatDateWithoutTime, formatWithCheck } from 'utils/dates';
import { handleCopy } from 'utils/helpers';
import CommonTableCell from '../TableCell';
import { useStyles } from './styles';
import { TableRangeCellPropsType } from './types';

const TableRangeCell: React.FC<TableRangeCellPropsType> = memo(props => {
  const { value, ...restProps } = props;

  const {
    tableRangeCellInfoWrapper,
    tableRangeCellDatesFullInfoContainer,
    tooltipListItem,
    tooltipList,
    copyAction,
  } = useStyles();

  const handleMap = (item: string | Date) =>
    formatWithCheck(item, formatDateWithoutTime);

  const formattedDates = value?.map(handleMap);

  const outPutValue =
    formattedDates?.length &&
    `${formattedDates[0]}-${formattedDates[formattedDates.length - 1]}`;

  const renderListItem = (data: string) => (
    <ListItem className={tooltipListItem}>
      <Button onClick={handleCopy(data)} className={copyAction}>
        Скопировать
      </Button>
      <span>{data}</span>
    </ListItem>
  );

  const tooltipTitle = (
    <List className={tooltipList}>{formattedDates?.map(renderListItem)}</List>
  );

  return (
    <CommonTableCell {...restProps}>
      <Tooltip
        classes={{ tooltip: tableRangeCellDatesFullInfoContainer }}
        title={tooltipTitle}
        TransitionComponent={Zoom}
        interactive
        leaveTouchDelay={3000}
        enterTouchDelay={50}
      >
        <div className={tableRangeCellInfoWrapper}>
          <span>{outPutValue}</span>
        </div>
      </Tooltip>
    </CommonTableCell>
  );
});

TableRangeCell.displayName = 'TableRangeCell';

export default TableRangeCell;
