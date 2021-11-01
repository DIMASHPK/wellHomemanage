import { UnionToIntersectionType } from 'constants/types';
import { formatDateToSqlDate, sortDatesByAscending } from 'utils/dates';
import {
  FilterNameType,
  GetNotEmptyFiltersArgsType,
  GetTransformFilterDatesType,
} from './types';
import { FILTER_COND_ITEMS, INPUT_FILTERS_MAPPING } from './constants';

const getTransformFilterDates: GetTransformFilterDatesType = dates =>
  sortDatesByAscending(dates.map(formatDateToSqlDate));

export const getNotEmptyFilters = ({
  filters,
  selectedTabName,
}: GetNotEmptyFiltersArgsType) => {
  const currentTableFiltersFiltersData = INPUT_FILTERS_MAPPING[selectedTabName];

  const currentTableFiltersFiltersDataIntersected = INPUT_FILTERS_MAPPING[
    selectedTabName
  ] as UnionToIntersectionType<typeof currentTableFiltersFiltersData>;

  const handleFilter = ({ name, value }: typeof filters[number]) => {
    if (!name || name === 'id') {
      return false;
    }

    const { filter } = currentTableFiltersFiltersDataIntersected[name];

    return !!(
      filter === 'iLike' ||
      ((filter === 'eq' || filter === 'between' || filter === 'rangeBetween') &&
        value.length)
    );
  };

  const handleMap = ({ name, value }: typeof filters[number]) => {
    const nameWithExcludes = name as Exclude<typeof name, '' | 'id'>;

    const { filter } =
      currentTableFiltersFiltersDataIntersected[nameWithExcludes];

    const filterName: FilterNameType = `filter.${nameWithExcludes}.${filter}`;

    const getMapValue = () => {
      if (Array.isArray(value)) {
        return `{${getTransformFilterDates(value)}`;
      }

      return value;
    };

    return {
      name: filterName,
      value: getMapValue(),
    };
  };

  const resFilters = filters.filter(handleFilter).map(handleMap);

  return resFilters.length
    ? [
        ...resFilters,
        {
          name: 'filter.cond',
          value: filters[filters.length - 1]?.cond || FILTER_COND_ITEMS.AND,
        },
      ]
    : [...resFilters];
};
