import { AxiosResponse } from 'axios';

export type OrderDirectionType = 'ASC NULLS LAST' | 'DESC NULLS LAST';

export type possiblePaths = 'flats' | 'houses' | 'exclusives';

export interface GetAllArgs {
  page?: number;
  orderByName?: string;
  orderDirection?: OrderDirectionType;
  rowsPerPage?: number;
  path: possiblePaths;
}

export interface ApiType {
  getAll: <T>(args: GetAllArgs) => Promise<AxiosResponse<T>>;
  getPathnameWithParameters: (args: GetAllArgs) => string;
}
