import TextField from '@material-ui/core/TextField';
import React, { memo } from 'react';
import { TextFieldPropsType } from './types';

const Input: React.FC<TextFieldPropsType> = memo(props => {
  const { variant, label, value, onChange, error, classes, ...rest } = props;

  return (
    <TextField
      label={label}
      variant={variant}
      value={value}
      classes={classes}
      onChange={onChange}
      error={!!error}
      helperText={error ? error.message : null}
      {...rest}
    />
  );
});

Input.displayName = 'Input';

export default Input;
