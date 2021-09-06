import React, { memo } from 'react';
import { DatePicker as MuiDatePicker } from '@material-ui/pickers';
import { DatePickerPropsType } from './types';

const DatePicker: React.FC<DatePickerPropsType> = memo(props => {
  const {
    onChange = () => null,
    value,
    error,
    variant,
    pickerVariant = 'inline',
    format = 'DD/MM/YY',
    ...rest
  } = props;

  return (
    <MuiDatePicker
      value={value}
      error={!!error}
      onChange={onChange}
      helperText={error?.message}
      inputVariant={variant}
      variant={pickerVariant}
      format={format}
      {...rest}
    />
  );
});

DatePicker.displayName = 'DatePicker';

export default DatePicker;
