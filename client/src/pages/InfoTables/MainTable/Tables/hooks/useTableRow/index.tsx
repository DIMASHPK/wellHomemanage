import React, { useCallback, useMemo } from 'react';
import { useAppDispatch } from 'redux/hooks';
import clsx from 'clsx';
import TableCell from 'pages/InfoTables/common/TableCell';
import { useStyles } from './styles';
import type {
  UseTableRowArgsType,
  ReformatedRowDataType,
  UseTableRowReturnType,
  RenderCellArgsType,
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
  const { tableCell } = useStyles();

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

  return {
    reformatedRowData,
    handleClick,
    isCheck,
    renderCell,
  };
};
