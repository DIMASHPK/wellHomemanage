import { HandleOrderByType } from './types';
import { SORT_OPTIONS, SORT_OPTIONS_FROM_CLIENT } from '../constants';
import { camelToSnakeCase } from './strings';

export const handleOrderBy: HandleOrderByType = data => {
  const {
    orderOption = SORT_OPTIONS_FROM_CLIENT.DESC,
    orderBy = 'created_at',
  } = data;

  return [[camelToSnakeCase(orderBy), SORT_OPTIONS[orderOption]]];
};
