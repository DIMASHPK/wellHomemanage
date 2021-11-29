import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { UnionToIntersectionType } from 'constants/types';
import {
  FILTER_COND_ITEMS,
  INPUT_FILTERS_MAPPING,
} from 'pages/InfoTables/MainTable/TabsPanel/Filters/constants';
import { removeUserData } from 'redux/user/reducer';
import {
  FilterNameType,
  GetNotEmptyFiltersArgsType,
  GetTransformFilterDatesType,
} from './types';
import { formatDateToSqlDate, sortDatesByAscending } from './dates';
import { store as reduxStore } from '../redux';
import { removeLocalStorageValue } from './helpers';

const getTransformedFilterDates: GetTransformFilterDatesType = dates =>
  sortDatesByAscending(dates.map(formatDateToSqlDate));

export const transformFiltersForApi = ({
  filters,
  selectedTabName,
}: GetNotEmptyFiltersArgsType) => {
  const currentTableFiltersData = INPUT_FILTERS_MAPPING[selectedTabName];

  const intersectedCurrentTableFiltersData = INPUT_FILTERS_MAPPING[
    selectedTabName
  ] as UnionToIntersectionType<typeof currentTableFiltersData>;

  const handleFilter = ({ name, value }: typeof filters[number]) => {
    if (!name || name === 'id') {
      return false;
    }

    const { filter } = intersectedCurrentTableFiltersData[name];

    return !!(
      filter === 'iLike' ||
      ((filter === 'eq' || filter === 'between' || filter === 'rangeBetween') &&
        value.length)
    );
  };

  const handleMap = ({ name, value }: typeof filters[number]) => {
    const excludedName = name as Exclude<typeof name, '' | 'id'>;

    const { filter } = intersectedCurrentTableFiltersData[excludedName];

    const filterName: FilterNameType = `filter.${excludedName}.${filter}`;

    const getMapValue = () => {
      if (Array.isArray(value)) {
        return `${getTransformedFilterDates(value)}`;
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

export const handleAxiosError = (err: AxiosError) => {
  if (err?.response?.data) {
    console.log(err.response.data);
    console.log(err.response.status);
    console.log(err.response.headers);

    return toast.error(err?.response?.data?.message);
  }

  console.log(err);

  return toast.error(err?.message);
};

export const handleUnauthorizedIntersect = () => {
  const { dispatch } = reduxStore;

  removeLocalStorageValue('accessToken');
  dispatch(removeUserData());
};
