import WithController from 'hocs/withController';
import { FormInput } from 'pages/InfoTables/MainTable/Dialog/types';
import { UseFormValuesType } from 'pages/InfoTables/MainTable/TabsPanel/Filters/types';
import DatePicker from './index';

export const DialogRangePicker = WithController<FormInput, Date[] | undefined>(
  DatePicker
);

export const FilterRangePicker = WithController<
  UseFormValuesType,
  Date[] | undefined
>(DatePicker);
