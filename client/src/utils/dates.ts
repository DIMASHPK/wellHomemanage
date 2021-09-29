import moment from 'moment';

export const formatDate = (date: Date | string | undefined): string =>
  moment(date).format('DD/MM/YYYY, HH:mm:ss');
