import { AxiosResponse } from 'axios';
import { SORT_OPTIONS } from 'constants/apiFilters';
import { getOptionalType } from '../constants/types';

export type OrderOptionType = getOptionalType<typeof SORT_OPTIONS>;

export type possiblePaths = 'flats' | 'houses' | 'exclusives';

export interface GetAllArgs {
  page?: number;
  orderBy?: string;
  orderOption?: OrderOptionType;
  rowsPerPage?: number;
  path: possiblePaths;
}

export interface ApiType {
  getAll: <T>(args: GetAllArgs) => Promise<AxiosResponse<T>>;
  getPathnameWithParameters: (args: GetAllArgs) => string;
}

export interface GetAllDataType<T> {
  data: T;
  count: number;
  page: number;
  orderBy: string;
  orderOption: OrderOptionType;
}
