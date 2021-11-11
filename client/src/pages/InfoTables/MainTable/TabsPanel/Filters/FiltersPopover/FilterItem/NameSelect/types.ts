import { tabItemType } from 'components/Tabs/types';
import { FilterItemPropsType, GetNameOptionsArgsType } from '../types';

export interface NameSelectPropsType {
  currentFilter: FilterItemPropsType['filters'][number];
  index: number;
  filters: FilterItemPropsType['filters'];
  selectedTabName: tabItemType['name'];
}

export type GetValueForInput = (data: {
  selectedTabName: tabItemType['name'];
  name: FilterItemPropsType['filters'][number]['name'];
}) => '' | [];

export type GetNameOptionsType = (
  args: GetNameOptionsArgsType
) => { name: string; value: string }[];
