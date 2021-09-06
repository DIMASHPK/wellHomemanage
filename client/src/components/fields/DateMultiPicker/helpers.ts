import moment, { MomentInput } from 'moment/moment';
import { FormatDateType, LabelFuncType, GetLastDateType } from './types';

export const formatDate: FormatDateType = date =>
  moment(date as MomentInput).format('DD/MM/YY');

const getLastDate: GetLastDateType = dates =>
  dates.reduce((acc, item) =>
    moment(acc as MomentInput | undefined).isAfter(
      item as MomentInput | undefined
    )
      ? acc
      : item
  );

export const labelFunc: LabelFuncType =
  ({ emptyLabel, dates }) =>
  date =>
    date && dates.length > 0
      ? [dates[0], getLastDate(dates)].map(formatDate).join(' - ')
      : emptyLabel || '';
