import React, { memo } from 'react';
import Controller from 'components/Controller';
import { DateMultiPickerFormPropType } from './types';
import DatePicker from './index';

const PickerWithForm: React.FC<DateMultiPickerFormPropType> = memo(props => {
  const { name, control, ...rest } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <DatePicker
          onChange={date => field.onChange(date)}
          value={field.value as unknown as Date[]}
          {...rest}
        />
      )}
    />
  );
});

PickerWithForm.displayName = 'PickerWithForm';

export default PickerWithForm;
