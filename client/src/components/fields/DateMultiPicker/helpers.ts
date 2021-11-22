import moment, { MomentInput } from 'moment/moment';
import { sortDatesByAscending } from 'utils/dates';
import { FormatDateType, LabelFuncType } from './types';

export const formatDate: FormatDateType = date =>
  moment(date as MomentInput).format('DD/MM/YY');

export const labelFunc: LabelFuncType =
  ({ emptyLabel, dates }) =>
  date => {
    const sortedDates = sortDatesByAscending(dates);

    return date && dates.length > 0
      ? [sortedDates[0], sortedDates[sortedDates.length - 1]]
          .map(formatDate)
          .join(' - ')
      : emptyLabel || '';
  };
