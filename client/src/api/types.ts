import { SORT_OPTIONS } from 'constants/apiFilters';
import { GetOptionalType } from 'constants/types';
import { TAB_NAMES } from 'constants/tabs';
import { getNotEmptyFilters } from 'pages/InfoTables/MainTable/TabsPanel/Filters/helpers';

export type OrderOptionType = GetOptionalType<typeof SORT_OPTIONS>;

export type possiblePaths = GetOptionalType<typeof TAB_NAMES>;

export interface GetAllArgs {
  page?: number;
  orderBy?: string;
  orderOption?: OrderOptionType;
  rowsPerPage?: number;
  path: possiblePaths;
  filters?: ReturnType<typeof getNotEmptyFilters>;
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
  data: T extends []
    ? {
        [Property in keyof T]: T[Property] & {
          created_at: string;
          updated_at: string;
        };
      }
    : (T & { created_at: string; updated_at: string })[];
  count: number;
  page: number;
  orderBy: string;
  orderOption: OrderOptionType;
}
