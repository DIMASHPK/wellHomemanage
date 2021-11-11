import { FilterItemPropsType } from '../types';

export interface CondSelectPropsType {
  currentFilter: FilterItemPropsType['filters'][number];
  index: number;
  filters: FilterItemPropsType['filters'];
}
