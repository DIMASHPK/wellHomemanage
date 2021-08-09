import React, { useState, useContext } from 'react';
import { OutterCalendarProps } from '@material-ui/pickers/views/Calendar/Calendar';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { MuiPickersContext, DatePicker } from '@material-ui/pickers';
import moment, { Moment, MomentInput } from 'moment/moment';
import { DateMultiPickerPropType } from './types';

/* eslint-disable @typescript-eslint/no-empty-function */
const DateMultiPicker: React.FC<DateMultiPickerPropType> = props => {
  const {
    value = [new Date()],
    emptyLabel,
    onClose,
    onChange = () => {},
    variant,
    pickerVariant = 'inline',
    error,
    ...rest
  } = props;

  const [dates, setDates] = useState<(Moment | MaterialUiPickersDate)[]>(
    value.map(item => moment(item))
  );
  const utils = useContext(MuiPickersContext);

  const renderDay: OutterCalendarProps['renderDay'] = (
    day,
    selectedDate,
    dayInCurrentMonth,
    dayComponent
  ) =>
    React.cloneElement(dayComponent, {
      onClick: (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        const i = dates.findIndex(d =>
          utils?.isSameDay(d as MaterialUiPickersDate, day)
        );

        if (
          dates.length === 1 &&
          utils?.isSameDay(dates[0] as MaterialUiPickersDate, day)
        ) {
          return;
        }

        if (i >= 0) {
          const nextDates = [...dates];
          nextDates.splice(i, 1);
          setDates(nextDates);
        } else {
          setDates([...dates, day]);
        }
      },
      selected: !!dates.find(d =>
        utils?.isSameDay(d as MaterialUiPickersDate, day)
      ),
    });

  const formatDate = (date: MaterialUiPickersDate | Moment) =>
    moment(date as MomentInput).format('DD/MM/YY');

  const labelFunc = (date: MaterialUiPickersDate | Moment) =>
    date && dates.length > 0 && formatDate
      ? dates.map(formatDate).join(', ')
      : emptyLabel || '';

  return (
    <DatePicker
      {...rest}
      value={dates[0]}
      renderDay={renderDay}
      onClose={() => {
        onChange(dates);
        if (onClose) onClose();
      }}
      onChange={() => {}}
      labelFunc={labelFunc}
      inputVariant={variant}
      variant={pickerVariant}
      error={!!error}
      helperText={error?.message}
    />
  );
};

export default DateMultiPicker;
