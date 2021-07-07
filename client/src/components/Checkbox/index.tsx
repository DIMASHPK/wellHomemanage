import React, { memo, useCallback, useMemo } from 'react';
import MuiCheckbox from '@material-ui/core/Checkbox';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import type { CheckboxTypes } from './types';
import { handleRemoveCell, handleAddCell } from '../../redux/flats/reducer';

const Checkbox: React.FC<CheckboxTypes> = memo(props => {
  const { cellId, onChange, getCheck, ...rest } = props;

  const { selectedCells } = useAppSelector(({ flats }) => flats);

  const dispatch = useAppDispatch();

  const handleChange = useCallback(() => {
    if (onChange) {
      return onChange();
    }

    if (cellId && selectedCells.includes(cellId)) {
      return dispatch(handleRemoveCell(cellId));
    }

    if (cellId) {
      dispatch(handleAddCell(cellId));
    }
  }, [cellId, dispatch, onChange, selectedCells]);

  const checked = useMemo(() => {
    if (getCheck) {
      return getCheck();
    }

    if (cellId) {
      return selectedCells.includes(cellId);
    }

    return false;
  }, [cellId, getCheck, selectedCells]);

  return <MuiCheckbox checked={checked} onChange={handleChange} {...rest} />;
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
