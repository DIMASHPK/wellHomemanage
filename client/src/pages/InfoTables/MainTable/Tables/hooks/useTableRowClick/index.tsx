import { useAppDispatch } from 'redux/hooks';
import { useCallback, useMemo } from 'react';
import { UseTableRowArgs } from './types';

export const useTableRowClick = ({
  id,
  selectedCells,
  handleRemoveCell,
  handleSelectedAll,
  handleAddCell,
}: UseTableRowArgs) => {
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

  return { isCheck, handleClick };
};
