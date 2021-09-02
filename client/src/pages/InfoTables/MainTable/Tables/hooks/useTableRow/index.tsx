import React, { useCallback, useMemo } from 'react';
import { useAppDispatch } from 'redux/hooks';
import clsx from 'clsx';
import TableCell from 'pages/InfoTables/common/TableCell';
import moment from 'moment';
import List from '@material-ui/core/List';
import Tooltip from '@material-ui/core/Tooltip';
import ListItem from '@material-ui/core/ListItem';
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';
import { toast } from 'react-toastify';
import { useStyles } from './styles';
import type {
  UseTableRowArgsType,
  ReformatedRowDataType,
  UseTableRowReturnType,
  RenderCellArgsType,
  RenderDateRangeCellArgsType,
} from './types';

export const useTableRow = <T extends { [Property in keyof T]: T[Property] }>({
  tableRow,
  id,
  hiddenColumns,
  pathForHiddenColumnsState,
  handleRemoveCell,
  handleSelectedAll,
  handleAddCell,
  selectedCells,
}: UseTableRowArgsType<T>): UseTableRowReturnType<T> => {
  const {
    tableCell,
    tableRangeCellInfoWrapper,
    tableRangeCellDatesFullInfoContainer,
    tooltipListItem,
    tooltipList,
    copyAction,
  } = useStyles();

  const dispatch = useAppDispatch();

  const handleClick = useCallback(() => {
    if (id && selectedCells.includes(id as number)) {
      dispatch(handleRemoveCell(id));

      if (selectedCells.length === 1) {
        dispatch(handleSelectedAll(false));
      }

      return;
    }

    if (id) {
      dispatch(handleAddCell(id));
      dispatch(handleSelectedAll(true));
    }
  }, [
    dispatch,
    handleAddCell,
    handleRemoveCell,
    handleSelectedAll,
    id,
    selectedCells,
  ]);

  const handleCopy =
    (content: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      navigator.clipboard.writeText(content).then(() => {
        toast.success('Copied!', {
          position: 'bottom-right',
          autoClose: 1500,
        });
      });
    };

  const isCheck = useMemo(
    () => selectedCells.includes(id as number),
    [id, selectedCells]
  );

  const reformatedRowData = useMemo(
    () =>
      Object.entries(tableRow)
        .map(([key, value]) => ({ keyMap: key, value }))
        .reduce(
          (acc, item) => ({ ...acc, [item.keyMap]: item }),
          {}
        ) as ReformatedRowDataType<typeof tableRow>,
    [tableRow]
  );

  const renderCell = ({
    keyName = '',
    value = '',
    className = '',
  }: RenderCellArgsType) => (
    <>
      {Boolean(
        !keyName.length
          ? true
          : !hiddenColumns[pathForHiddenColumnsState][keyName]
      ) && (
        <TableCell className={clsx(tableCell, className)} align="center">
          {value}
        </TableCell>
      )}
    </>
  );

  const renderDatesRangeCell = ({
    keyName = '',
    value = [],
    className = '',
  }: RenderDateRangeCellArgsType) => {
    const formattedDates = value.map(item => moment(item).format('DD.MM.YYYY'));

    const outPutValue = `${formattedDates[0]}-${
      formattedDates[formattedDates.length - 1]
    }`;

    const renderListItem = (data: string) => (
      <ListItem className={tooltipListItem}>
        <Button onClick={handleCopy(data)} className={copyAction}>
          Скопировать
        </Button>
        <span>{data}</span>
      </ListItem>
    );

    const tooltipTitle = (
      <List className={tooltipList}>{formattedDates.map(renderListItem)}</List>
    );

    return (
      <>
        {Boolean(
          !keyName.length || !hiddenColumns[pathForHiddenColumnsState][keyName]
        ) && (
          <TableCell className={clsx(tableCell, className)} align="center">
            <Tooltip
              classes={{ tooltip: tableRangeCellDatesFullInfoContainer }}
              title={tooltipTitle}
              TransitionComponent={Zoom}
              interactive
            >
              <div className={tableRangeCellInfoWrapper}>
                <span>{outPutValue}</span>
              </div>
            </Tooltip>
          </TableCell>
        )}
      </>
    );
  };

  return {
    reformatedRowData,
    handleClick,
    isCheck,
    renderCell,
    renderDatesRangeCell,
  };
};
