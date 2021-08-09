import { DatePickerProps } from '@material-ui/pickers';
import { DatePickerPropsType } from '../DatePicker/types';
import { ControllerType } from '../../Controller/types';

export interface DateMultiPickerPropType
  extends Omit<DatePickerPropsType, 'onChange' | 'value' | 'labelFunc'> {
  value?: Date[];
  onChange?: (...args: any) => void;
  variant: DatePickerProps['inputVariant'];
  pickerVariant?: DatePickerProps['variant'];
}

export type DateMultiPickerFormPropType = Omit<ControllerType, 'render'> &
  Omit<DateMultiPickerPropType, 'value' | 'onChange'>;
