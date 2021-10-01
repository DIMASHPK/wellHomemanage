import { DatePickerProps } from '@material-ui/pickers';
import { FieldError } from 'react-hook-form';

export type DatePickerPropsType = Omit<
  DatePickerProps,
  'error' | 'variant' | 'onChange' | 'value'
> & {
  error?: FieldError;
  variant?: DatePickerProps['inputVariant'];
  pickerVariant?: DatePickerProps['variant'];
  initialValue?: Date;
  onChange?: DatePickerProps['onChange'];
  value?: DatePickerProps['value'];
};
