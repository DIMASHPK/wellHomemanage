import { getOptionalType } from '../constants/types';
import { SORT_OPTIONS_FROM_CLIENT, SORT_OPTIONS } from '../constants';

export type HandlePageType = (data: { page: string; rowsPerPage: string }) => {
  limit: number;
  offset: number;
  page: string;
};

export type HandleOrderByType = (data: {
  orderBy: string;
  orderOption: getOptionalType<typeof SORT_OPTIONS_FROM_CLIENT>;
}) => [[string, getOptionalType<typeof SORT_OPTIONS>]];
