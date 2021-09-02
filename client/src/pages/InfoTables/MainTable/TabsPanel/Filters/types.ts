import { getOptionalType } from 'constants/types';
import { TAB_NAMES } from 'constants/tabs';
import { FILTER_COND_ITEMS } from 'pages/InfoTables/MainTable/constants';
import { INPUTS_MAPPING } from 'pages/InfoTables/MainTable/Dialog/constants';
import { tabItemType } from 'components/TabsPanel/types';
import React from 'react';
import { INPUT_MAPPINGS_KEYS } from './constants';

const nameValues = Object.values(INPUTS_MAPPING)
  .map(item => item.map(({ name }) => name))
  .flat();

export type FiltersType = {
  value: string | Date[];
  name: typeof nameValues[number] | '';
  cond?: getOptionalType<typeof FILTER_COND_ITEMS> | '';
  type: getOptionalType<typeof INPUT_MAPPINGS_KEYS>;
}[];

export interface UseFilterArgsType {
  selectedTab: tabItemType;
}

export interface UseFilterReturnType {
  filters: FiltersType;
  onAddFilter: () => void;
  onRemoveFilter: (index: number) => void;
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
}

export interface FiltersPropsType extends UseFilterReturnType {
  selectedTabName: getOptionalType<typeof TAB_NAMES>;
}
