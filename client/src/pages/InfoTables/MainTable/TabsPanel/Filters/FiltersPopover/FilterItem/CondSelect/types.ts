import { FiltersType } from 'pages/InfoTables/MainTable/TabsPanel/Filters/types';

export interface CondSelectPropsType {
  currentFilter: FiltersType[number];
  index: number;
  filters: FiltersType;
}
