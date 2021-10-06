import { SORT_OPTIONS } from 'constants/apiFilters';
import { getOptionalType } from '../constants/types';
import { TAB_NAMES } from '../constants/tabs';

export type OrderOptionType = getOptionalType<typeof SORT_OPTIONS>;

export type possiblePaths = getOptionalType<typeof TAB_NAMES>;

export interface GetAllArgs {
  page?: number;
  orderBy?: string;
  orderOption?: OrderOptionType;
  rowsPerPage?: number;
  path: possiblePaths;
}

export interface AddArgsType<T> {
  path: `${possiblePaths}/add`;
  data: T;
}

export interface RemoveArgsType {
  path: `${possiblePaths}/remove`;
  data: { ids: number[] };
}

export interface UpdateArgsType<T> {
  path: `${possiblePaths}/update`;
  data: T;
}

export interface GetAllDataType<T> {
  data: T;
  count: number;
  page: number;
  orderBy: string;
  orderOption: OrderOptionType;
}
