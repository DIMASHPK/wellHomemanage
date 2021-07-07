import React, { memo, useCallback, useMemo } from 'react';
import isEqual from 'lodash/isEqual';
import Checkbox from '../../../../../../components/Checkbox';
import { useAppDispatch, useAppSelector } from '../../../../../../redux/hooks';
import { handleAllCells } from '../../../../../../redux/flats/reducer';

const HeadCheckbox: React.FC = memo(() => {
  const { selectedCells, flats } = useAppSelector(({ flats }) => flats);

  const dispatch = useAppDispatch();

  const reformattedCellsIds = useMemo(() => flats.map(({ id }) => id), [flats]);

  const getCheck = useCallback(
    () => isEqual(selectedCells, reformattedCellsIds),
    [reformattedCellsIds, selectedCells]
  );

  const handleChange = useCallback(() => {
    dispatch(handleAllCells(!getCheck() ? reformattedCellsIds : []));
  }, [dispatch, getCheck, reformattedCellsIds]);

  return <Checkbox getCheck={getCheck} onChange={handleChange} />;
});

HeadCheckbox.displayName = 'HeadCheckbox';

export default HeadCheckbox;
