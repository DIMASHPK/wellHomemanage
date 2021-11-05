import InputLabel from '@material-ui/core/InputLabel';
import React, { memo } from 'react';
import MuiSelect from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { SelectPropsType, OptionType } from './types';

const Select: React.FC<SelectPropsType> = memo(props => {
  const {
    variant = 'outlined',
    label,
    value,
    onChange = () => null,
    error,
    options = [],
    className,
    labelClasses = {},
    ...rest
  } = props;

  const renderOption = ({ name, ...data }: OptionType) => (
    <MenuItem {...data}>{name}</MenuItem>
  );

  return (
    <FormControl variant={variant} className={className}>
      <InputLabel classes={labelClasses} id="demo-simple-select-outlined-label">
        {label}
      </InputLabel>
      <MuiSelect
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={value}
        onChange={onChange}
        label={label}
        error={!!error}
        {...rest}
      >
        {options.map(renderOption)}
      </MuiSelect>
      {error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
});

Select.displayName = 'Select';

export default Select;
