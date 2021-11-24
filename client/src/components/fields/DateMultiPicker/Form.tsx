import WithController from 'hocs/withController';
import { FormInput } from 'pages/InfoTables/MainTable/Dialog/types';
import { UseFormValuesType } from 'pages/InfoTables/MainTable/TabsPanel/Filters/types';
import DatePicker from './index';
import { DateMultiPickerPropType } from './types';

export const DialogRangePicker = WithController<
  FormInput,
  DateMultiPickerPropType
>(DatePicker);

export const FilterRangePicker = WithController<
  UseFormValuesType,
  DateMultiPickerPropType
>(DatePicker);
