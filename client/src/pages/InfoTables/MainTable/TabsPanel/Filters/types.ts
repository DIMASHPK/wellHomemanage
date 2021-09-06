import { getOptionalType } from 'constants/types';
import { TAB_NAMES } from 'constants/tabs';
import { tabItemType } from 'components/TabsPanel/types';
import { Control, UseFormReturn } from 'react-hook-form';
import { RootState } from 'redux/types';
import { FILTER_COND_ITEMS } from './constants';

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
  value: string | Date[];
  name: keyof ReturnType<typeof getNameValues> | '';
  cond?: getOptionalType<typeof FILTER_COND_ITEMS> | '';
}[];

export interface UseFormValuesType {
  filters: FiltersType;
}

export interface UseFilterArgsType {
  selectedTab: tabItemType;
}

export interface UseFilterReturnType {
  filters: FiltersType;
  onAddFilter: () => void;
  onRemoveFilter: (index: number) => void;
  control: Control<UseFormValuesType>;
  reactHookFormData: UseFormReturn<UseFormValuesType>;
}

export interface FiltersPropsType extends UseFilterReturnType {
  selectedTabName: getOptionalType<typeof TAB_NAMES>;
}
