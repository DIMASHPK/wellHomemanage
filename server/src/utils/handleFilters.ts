import {
  SORT_OPTIONS,
  SORT_OPTIONS_FROM_CLIENT,
  FILTER_MAPPINGS,
  FILTER_COND_KEY,
} from '../constants';
import { camelToSnakeCase } from './strings';
import {
  HandleFilterValueType,
  HandleFindAllSqlQueryType,
  HandleOffsetType,
  HandleOrderByTypeNew,
  HandleWhereClause,
} from './types';

export const handleOrderBy: HandleOrderByTypeNew = data => {
  const {
    orderOption = SORT_OPTIONS_FROM_CLIENT.DESC,
    orderBy = 'created_at',
  } = data;

  return `ORDER BY ${camelToSnakeCase(orderBy)} ${SORT_OPTIONS[orderOption]}`;
};

export const handleOffset: HandleOffsetType = ({ page, rowsPerPage }) =>
  `OFFSET ${parseInt(page) * parseInt(rowsPerPage)}`;

export const handleFilterValue: HandleFilterValueType = ({ key, value }) => {
  const [, camelCaseKey, filter] = key.split('.');
  const snakeCaseKey = camelToSnakeCase(camelCaseKey);

  switch (filter) {
    case FILTER_MAPPINGS.EQ:
      return `${snakeCaseKey} = ${value}`;
    case FILTER_MAPPINGS.ILIKE:
      return `${snakeCaseKey} ILIKE '%${value}%'`;
    case FILTER_MAPPINGS.BETWEEN: {
      const [firstDate, lastDate] = value.split(',');

      return `${snakeCaseKey} BETWEEN '${firstDate}'::timestamp AND '${lastDate}'::timestamp`;
    }

    default:
      return '';
  }
};

export const handleWhereClause: HandleWhereClause = filters => {
  if (filters && !Object.values(filters).length) {
    return '';
  }

  const currentCond = filters[FILTER_COND_KEY].toUpperCase();

  const filterString = Object.entries(filters).reduce(
    (acc, [key, value], index) =>
      `${acc}${
        index === 0 || key === FILTER_COND_KEY ? ' ' : ` ${currentCond} `
      }${handleFilterValue({
        key,
        value,
      })}`,
    'WHERE'
  );

  return filterString;
};

export const handleFindAllSqlQuery: HandleFindAllSqlQueryType = ({
  page = '0',
  rowsPerPage = '10',
  orderBy,
  orderOption,
  filters,
}) =>
  `${handleWhereClause(filters)}${handleOrderBy({
    orderBy,
    orderOption,
  })} LIMIT ${rowsPerPage} ${handleOffset({ page, rowsPerPage })}`;
