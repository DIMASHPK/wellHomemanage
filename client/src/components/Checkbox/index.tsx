import React, { memo, useCallback } from 'react';
import MuiCheckbox from '@material-ui/core/Checkbox';
import type { CheckboxTypes } from './types';

const Checkbox: React.FC<CheckboxTypes> = memo(props => {
  const { checked, onChange, ...rest } = props;

  const handleChange = useCallback(
    e => {
      if (onChange) {
        return onChange(e);
      }
    },
    [onChange]
  );

  return <MuiCheckbox checked={checked} onChange={handleChange} {...rest} />;
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
