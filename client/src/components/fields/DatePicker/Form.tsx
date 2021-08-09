import React, { memo } from 'react';
import Controller from 'components/Controller';
import { DatePickerFormPropsType } from './types';
import DatePicker from './index';

const PickerWithForm: React.FC<DatePickerFormPropsType> = memo(props => {
  const { name, control, ...rest } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <DatePicker
          onChange={date => field.onChange(date)}
          value={field.value}
          {...rest}
        />
      )}
    />
  );
});

PickerWithForm.displayName = 'PickerWithForm';

export default PickerWithForm;
