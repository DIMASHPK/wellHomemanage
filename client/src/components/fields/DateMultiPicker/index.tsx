import React, { useState, useContext } from 'react';
import { OutterCalendarProps } from '@material-ui/pickers/views/Calendar/Calendar';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { MuiPickersContext, DatePicker } from '@material-ui/pickers';
import moment from 'moment/moment';
import {
  DateMultiPickerPropType,
  DatesUseStateType,
  HandleClickDayType,
} from './types';
import { labelFunc } from './helpers';

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

  const [dates, setDates] = useState<DatesUseStateType>(
    (Array.isArray(value) ? value : [new Date()]).map(item => moment(item))
  );
  const utils = useContext(MuiPickersContext);

  const handleClickDay: HandleClickDayType = day => e => {
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
  };

  const renderDay: OutterCalendarProps['renderDay'] = (
    day,
    selectedDate,
    dayInCurrentMonth,
    dayComponent
  ) =>
    React.cloneElement(dayComponent, {
      onClick: handleClickDay(day),
      selected: !!dates.find(d =>
        utils?.isSameDay(d as MaterialUiPickersDate, day)
      ),
    });

  const handleClose = () => {
    onChange(dates);
    if (onClose) onClose();
  };

  return (
    <DatePicker
      {...rest}
      value={dates[0]}
      renderDay={renderDay}
      onClose={handleClose}
      onChange={() => {}}
      labelFunc={labelFunc({ dates, emptyLabel })}
      inputVariant={variant}
      variant={pickerVariant}
      error={!!error}
      helperText={error?.message}
    />
  );
};

export default DateMultiPicker;
