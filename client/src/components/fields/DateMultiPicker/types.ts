import { DatePickerProps } from '@material-ui/pickers';
import moment, { Moment } from 'moment/moment';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import React from 'react';
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

export type DatesUseStateType = (Moment | MaterialUiPickersDate)[];

export type FormatDateType = (date: MaterialUiPickersDate | Moment) => string;

export type LabelFuncType = (args: {
  emptyLabel?: string;
  dates: (moment.Moment | MaterialUiPickersDate)[];
}) => (date: MaterialUiPickersDate | Moment) => string;

export type HandleClickDayType = (
  day: MaterialUiPickersDate
) => (e: React.MouseEvent<HTMLElement>) => void;
