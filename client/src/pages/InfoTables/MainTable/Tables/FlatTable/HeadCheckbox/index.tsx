import React, { memo, useCallback, useMemo } from 'react';
import isEqual from 'lodash/isEqual';
import Checkbox from 'components/Checkbox';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { handleAllCells } from 'redux/flats/reducer';
import { CheckboxTypes } from 'components/Checkbox/types';
import RemoveAllCheckbox from './RemoveAllCheckbox';

const HeadCheckbox: React.FC<CheckboxTypes> = memo(props => {
  const { selectedCells, flats, selectedAll } = useAppSelector(
    ({ flats }) => flats
  );

  const dispatch = useAppDispatch();

  const reformattedCellsIds = useMemo(() => flats.map(({ id }) => id), [flats]);

  const getCheck = useMemo(
    () => isEqual(selectedCells, reformattedCellsIds),
    [reformattedCellsIds, selectedCells]
  );

  const handleChange = useCallback(() => {
    dispatch(handleAllCells(!getCheck ? reformattedCellsIds : []));
  }, [dispatch, getCheck, reformattedCellsIds]);

  if (selectedAll) {
    return <RemoveAllCheckbox {...props} />;
  }

  return <Checkbox checked={getCheck} onChange={handleChange} {...props} />;
});

HeadCheckbox.displayName = 'HeadCheckbox';

export default HeadCheckbox;
