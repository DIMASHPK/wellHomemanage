import { SORT_OPTIONS } from 'constants/apiFilters';
import { GetOptionalType } from 'constants/types';
import { TAB_NAMES } from 'constants/tabs';
import { USER_PATHS } from 'constants/user';
import { transformFiltersForApi } from 'utils/api';

export type OrderOptionType = GetOptionalType<typeof SORT_OPTIONS>;

export type possibleTablePaths = GetOptionalType<typeof TAB_NAMES>;

export type possibleUserPaths = GetOptionalType<typeof USER_PATHS>;

export interface GetAllArgs {
  page?: number;
  orderBy?: string;
  orderOption?: OrderOptionType;
  rowsPerPage?: number;
  path: possibleTablePaths;
  filters?: ReturnType<typeof transformFiltersForApi>;
}

export interface AddArgsType<T> {
  path: `${possibleTablePaths}/add` | possibleUserPaths;
  data: T;
}

export interface RemoveArgsType {
  path: `${possibleTablePaths}/remove`;
  data: { ids: number[] };
}

export interface UpdateArgsType<T> {
  path: `${possibleTablePaths}/update`;
  data: T;
}

export interface GetAllDataType<T> {
  data: T extends []
    ? {
        [Property in keyof T]: T[Property] & {
          created_at: string;
          updated_at: string;
        };
      }
    : (T & { created_at: string; updated_at: string })[];
  count: string;
  page: number;
  orderBy: string;
  orderOption: OrderOptionType;
}
