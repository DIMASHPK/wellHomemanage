import TextField from '@material-ui/core/TextField';
import React, { memo } from 'react';
import clsx from 'clsx';
import { TextFieldPropsType } from './types';
import { useStyles } from './styles';

const Input: React.FC<TextFieldPropsType> = memo(props => {
  const { variant, label, value, onChange, error, classes, ...rest } = props;

  const { root } = useStyles();

  return (
    <TextField
      label={label}
      variant={variant}
      value={value}
      classes={{ root: clsx(root, classes?.root) }}
      onChange={onChange}
      error={!!error}
      helperText={error ? error.message : null}
      {...rest}
    />
  );
});

Input.displayName = 'Input';

export default Input;
