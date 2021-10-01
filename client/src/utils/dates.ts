import moment from 'moment';
import { DateFormatterType } from './types';

export const formatDate: DateFormatterType = date =>
  moment(date).format('DD/MM/YYYY, HH:mm:ss');

export const formatToISOString: DateFormatterType = date =>
  moment(date).toISOString();
