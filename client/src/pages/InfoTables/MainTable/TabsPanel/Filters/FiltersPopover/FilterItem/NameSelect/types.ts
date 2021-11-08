import { FiltersType } from 'pages/InfoTables/MainTable/TabsPanel/Filters/types';
import { tabItemType } from 'components/Tabs/types';
import { GetNameOptionsArgsType } from '../types';

export interface NameSelectPropsType {
  currentFilter: FiltersType[number];
  index: number;
  filters: FiltersType;
  selectedTabName: tabItemType['name'];
}

export type GetValueForInput = (data: {
  selectedTabName: tabItemType['name'];
  name: FiltersType[number]['name'];
}) => '' | [];

export type GetNameOptionsType = (
  args: GetNameOptionsArgsType
) => { name: string; value: string }[];
