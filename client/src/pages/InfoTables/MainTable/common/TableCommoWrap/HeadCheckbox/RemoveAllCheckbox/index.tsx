import React, { memo, useCallback } from 'react';
import Checkbox from 'components/Checkbox';
import { useAppDispatch } from 'redux/hooks';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import type { RemoveAllCheckboxType } from './types';

const RemoveAllCheckbox: React.FC<RemoveAllCheckboxType> = memo(props => {
  const { handleAllCells, handleSelectedAll } = props;

  const dispatch = useAppDispatch();

  const checkedIcon = <IndeterminateCheckBoxIcon />;

  const handleChange = useCallback(() => {
    dispatch(handleAllCells([]));
    dispatch(handleSelectedAll(false));
  }, [dispatch, handleAllCells, handleSelectedAll]);

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
