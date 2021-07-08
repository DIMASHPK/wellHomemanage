import React, { memo, useCallback } from 'react';
import Checkbox from 'components/Checkbox';
import { useAppDispatch } from 'redux/hooks';
import { handleAllCells, handleSelectedAll } from 'redux/flats/reducer';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';

const RemoveAllCheckbox = memo(props => {
  const dispatch = useAppDispatch();

  const checkedIcon = <IndeterminateCheckBoxIcon />;

  const handleChange = useCallback(() => {
    dispatch(handleAllCells([]));
    dispatch(handleSelectedAll(false));
  }, [dispatch]);

  return (
    <Checkbox
      checkedIcon={checkedIcon}
      checked
      onChange={handleChange}
      {...props}
    />
  );
});

RemoveAllCheckbox.displayName = 'RemoveAllCheckbox';

export default RemoveAllCheckbox;
