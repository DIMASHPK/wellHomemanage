import React, { memo, useCallback, useMemo } from 'react';
import isEqual from 'lodash/isEqual';
import Checkbox from 'components/Checkbox';
import { useAppDispatch } from 'redux/hooks';
import type { HeadCheckboxTypes } from './types';
import RemoveAllCheckbox from './RemoveAllCheckbox';

const HeadCheckbox: React.FC<HeadCheckboxTypes> = memo(props => {
  const {
    data,
    selectedCells,
    selectedAll,
    handleAllCells,
    handleSelectedAll,
    ...rest
  } = props;

  const dispatch = useAppDispatch();

  const reformattedCellsIds = useMemo(
    () => data?.map?.(({ id }) => id) || [],
    [data]
  );

  const getCheck = useMemo(
    () =>
      !!reformattedCellsIds.length &&
      isEqual(selectedCells, reformattedCellsIds),
    [reformattedCellsIds, selectedCells]
  );

  const handleChange = useCallback(() => {
    dispatch(handleAllCells(!getCheck ? reformattedCellsIds : []));
  }, [dispatch, getCheck, handleAllCells, reformattedCellsIds]);

  if (selectedAll) {
    return (
      <RemoveAllCheckbox
        handleAllCells={handleAllCells}
        handleSelectedAll={handleSelectedAll}
        {...rest}
      />
    );
  }

  return <Checkbox checked={getCheck} onChange={handleChange} {...rest} />;
});

HeadCheckbox.displayName = 'HeadCheckbox';

export default HeadCheckbox;
