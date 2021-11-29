import React, { memo, useCallback } from 'react';
import MuiCheckbox from '@material-ui/core/Checkbox';
import clsx from 'clsx';
import type { CheckboxTypes } from './types';
import { useStyles } from './styles';

const Checkbox: React.FC<CheckboxTypes> = memo(props => {
  const { checked, onChange, classes, ...rest } = props;

  const { root } = useStyles();

  const handleChange = useCallback(
    e => {
      if (onChange) {
        return onChange(e);
      }
    },
    [onChange]
  );

  return (
    <MuiCheckbox
      checked={checked}
      onChange={handleChange}
      classes={{ ...classes, root: clsx(root, classes?.root) }}
      {...rest}
    />
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
