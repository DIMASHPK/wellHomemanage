import { GetOptionalType } from 'constants/types';
import { TAB_NAMES } from 'constants/tabs';
import { tabItemType } from 'components/Tabs/types';
import { UseFormReturn } from 'react-hook-form';
import { RootState } from 'redux/types';
import { FILTER_CLAUSES, FILTER_COND_ITEMS } from './constants';
import { useFilters } from './hooks/useFilters';

const getNameValues = ({
  exclusives: { exclusives },
  houses: { houses },
  flats: { flats },
}: RootState) => ({
  ...exclusives?.[0],
  ...houses?.[0],
  ...flats?.[0],
});

export type FiltersType = {
  value: string | string[];
  name: keyof ReturnType<typeof getNameValues> | '';
  cond?: GetOptionalType<typeof FILTER_COND_ITEMS> | '';
}[];

export interface UseFormValuesType {
  filters: FiltersType;
}

export interface UseFilterArgsType {
  selectedTab: tabItemType;
}

export interface FiltersPropsType extends ReturnType<typeof useFilters> {
  selectedTabName: GetOptionalType<typeof TAB_NAMES>;
}

export interface useDebounceSubmitArgs {
  // eslint-disable-next-line @typescript-eslint/ban-types
  form: UseFormReturn<UseFormValuesType, object>;
  selectedTabName: GetOptionalType<typeof TAB_NAMES>;
}

export interface UseSavedFiltersArgsType {
  selectedTabName: GetOptionalType<typeof TAB_NAMES>;
}

export interface HandleSaveStateArgsType {
  filters: FiltersType;
  tabName: GetOptionalType<typeof TAB_NAMES>;
}

export type useDebounceSubmitType = (data: UseFormValuesType) => void;

export type FilterNameType = `filter.${Exclude<
  FiltersType[number]['name'],
  '' | 'id'
>}.${GetOptionalType<typeof FILTER_CLAUSES>}`;

export type GetNotEmptyFiltersArgsType = {
  filters: FiltersType;
  selectedTabName: GetOptionalType<typeof TAB_NAMES>;
};

export type GetTransformFilterDatesType = (dates: string[]) => string[];
