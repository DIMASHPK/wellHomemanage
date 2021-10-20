import { Op } from 'sequelize';
import { FiltersType, getOptionalType } from '../constants/types';
import { SORT_OPTIONS_FROM_CLIENT, SORT_OPTIONS } from '../constants';

export type HandleFiltersType = (filters: FiltersType) => {
  [x in typeof Op['all'] | typeof Op['or']]: {
    [key: string]: {
      [key in getOptionalType<typeof Op>]: string[] | string;
    };
  };
};

export type HandlePageType = (data: {
  page: string;
  rowsPerPage: string;
  filters: FiltersType;
}) => {
  limit: number;
  offset: number;
  page: string;
  where?: ReturnType<HandleFiltersType>;
};

export type GetValueType = (data: {
  value: string;
  op: string;
}) => `%${string}` | string | string[];

export type HandleOrderByType = (data: {
  orderBy: string;
  orderOption: getOptionalType<typeof SORT_OPTIONS_FROM_CLIENT>;
}) => [[string, getOptionalType<typeof SORT_OPTIONS>]];

type Alph =
  | 'Q'
  | 'W'
  | 'E'
  | 'R'
  | 'T'
  | 'Y'
  | 'U'
  | 'I'
  | 'O'
  | 'P'
  | 'A'
  | 'S'
  | 'D'
  | 'F'
  | 'G'
  | 'H'
  | 'J'
  | 'K'
  | 'L'
  | 'X'
  | 'Z'
  | 'C'
  | 'V'
  | 'B'
  | 'N'
  | 'M';

export type CamelToSnake<T extends string> =
  T extends `${infer S1}${Alph}${string}`
    ? T extends `${S1}${infer S2}`
      ? `${Lowercase<S1>}_${CamelToSnake<Uncapitalize<S2>>}`
      : T
    : T;

export type CamelPropToSnake<T extends PropertyKey> = T extends string
  ? CamelToSnake<T>
  : T;

export type CamelObjectToSnake<T extends { [key: string]: any }> = {
  [K in keyof T as CamelPropToSnake<K>]: T[K];
};
