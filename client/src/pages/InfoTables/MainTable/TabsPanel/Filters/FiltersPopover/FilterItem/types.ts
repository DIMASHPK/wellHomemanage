import React from 'react';
import { tabItemType } from 'components/TabsPanel/types';
import {
  FiltersPropsType,
  FiltersType,
} from 'pages/InfoTables/MainTable/TabsPanel/Filters/types';
import { FlatType } from 'redux/flats/types';
import { HouseType } from 'redux/houses/types';
import { ExclusiveType } from 'redux/exclusive/types';
import { getOptionalType } from 'constants/types';
import { INPUT_MAPPINGS_KEYS } from '../../constants';

export interface FilterItemPropsType
  extends Omit<FiltersPropsType, 'onAddFilter'> {
  index: number;
}

export interface GetNameOptionsArgsType {
  selectedTabName: FilterItemPropsType['selectedTabName'];
  name: string;
  filters: FilterItemPropsType['filters'];
}

export type GetNameOptionsType = (
  args: GetNameOptionsArgsType
) => { name: string; value: string }[];

export type GetInputComponentType = Pick<
  GetNameOptionsArgsType,
  'selectedTabName' | 'name'
>;

export type UseFilterActionType = (
  event: React.ChangeEvent<{ value: unknown }>
) => void;

export interface UseFilterHandlersArgsType {
  selectedTabName: tabItemType['name'];
  index: number;
  setFilters: FiltersPropsType['setFilters'];
}

export interface UseFilterHandlersReturnType {
  onValueChange: UseFilterActionType;
  onNameChange: UseFilterActionType;
  onCondChange: UseFilterActionType;
  onValueRangeChange: (dates: Date[]) => void;
}

export type GetTypeWithValueType = (data: {
  currentTableData: (FlatType | HouseType | ExclusiveType)[];
}) => (innerFuncData: { name: FiltersType[number]['name'] }) => {
  type: getOptionalType<typeof INPUT_MAPPINGS_KEYS>;
  value: '' | [];
};

export interface UseInputArgsType {
  type: FiltersPropsType['filters'][number]['type'];
  value: FiltersPropsType['filters'][number]['value'];
  onValueChange: UseFilterActionType;
  onValueRangeChange: (dates: Date[]) => void;
  className: string;
}
