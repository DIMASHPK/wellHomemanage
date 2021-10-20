import { COND_OPTIONS } from 'constants/index';
import { getOptionalType } from 'constants/types';
import { Op } from 'sequelize';
import { camelToSnakeCase } from './strings';
import { HandlePageType, HandleFiltersType, GetValueType } from './types';

const handleFilters: HandleFiltersType = filters => {
  if (filters && !Object.values(filters).length) {
    return {} as ReturnType<HandleFiltersType>;
  }

  const getValue: GetValueType = ({ value, op }) => {
    const splittedValue = value.split(',');

    if (op === 'like') {
      return `%${value}%`;
    }

    if (splittedValue.length > 1) {
      return splittedValue;
    }

    return value;
  };

  const parsedFilters = Object.entries(filters).map(([key, value]) => {
    const [, camelCaseKey, op] = key.split('.');

    return {
      key: camelToSnakeCase(camelCaseKey),
      value: getValue({ value, op }),
      op: op ? Op[op as keyof typeof Op] : null,
    };
  });

  const condFilter = parsedFilters.find(
    item =>
      typeof item?.value === 'string' &&
      Object.values(COND_OPTIONS).includes(
        item?.value as getOptionalType<typeof COND_OPTIONS>
      )
  );

  const currentCond =
    Op[condFilter?.value as getOptionalType<typeof COND_OPTIONS>];

  const defaultAcc = {
    [currentCond]: {},
  };

  return parsedFilters.reduce((acc, item) => {
    if (item.key === 'cond' || !item.op) {
      return acc;
    }

    return {
      [currentCond]: {
        ...acc[currentCond],
        [item.key]: {
          [item.op]: item.value,
        },
      },
    };
  }, defaultAcc) as ReturnType<HandleFiltersType>;
};

export const handlePage: HandlePageType = ({
  page = '0',
  rowsPerPage = '10',
  filters,
}) => ({
  limit: parseInt(rowsPerPage),
  offset: parseInt(page) * parseInt(rowsPerPage),
  page,
  where: handleFilters(filters),
});
