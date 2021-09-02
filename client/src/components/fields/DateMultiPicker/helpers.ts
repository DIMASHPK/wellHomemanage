import moment, { MomentInput } from 'moment/moment';
import { FormatDateType, LabelFuncType } from './types';

export const formatDate: FormatDateType = date =>
  moment(date as MomentInput).format('DD/MM/YY');

export const labelFunc: LabelFuncType =
  ({ emptyLabel, dates }) =>
  date =>
    date && dates.length > 0
      ? [dates[0], dates[dates.length - 1]].map(formatDate).join(' - ')
      : emptyLabel || '';
