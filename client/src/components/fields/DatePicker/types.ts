import { DatePickerProps } from '@material-ui/pickers';
import { FieldError } from 'react-hook-form';
import { ControllerType } from '../../Controller/types';

export type DatePickerPropsType = Omit<DatePickerProps, 'error' | 'variant'> & {
  error?: FieldError;
  variant: DatePickerProps['inputVariant'];
  pickerVariant?: DatePickerProps['variant'];
  initialValue?: Date;
};

export type DatePickerFormPropsType = Omit<ControllerType, 'render'> &
  Omit<DatePickerPropsType, 'value' | 'onChange'>;
