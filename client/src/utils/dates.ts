import moment from 'moment';
import {
  DateFormatterType,
  CheckDateValidType,
  FormatWithCheckType,
} from './types';

export const formatDate: DateFormatterType = date =>
  moment(date).format('DD/MM/YYYY, HH:mm:ss');

export const formatDateWithoutTime: DateFormatterType = date =>
  moment(date).format('DD/MM/YYYY');

export const formatToISOString: DateFormatterType = date =>
  moment(date).toISOString();

export const checkIsDataValid: CheckDateValidType = date =>
  moment(date).isValid();

export const formatWithCheck: FormatWithCheckType = (
  item,
  callBack = formatDate
) => (checkIsDataValid(item) ? callBack(item) : '');
