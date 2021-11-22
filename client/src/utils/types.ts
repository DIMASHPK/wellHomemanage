import { GetOptionalType } from '../constants/types';
import { FILTER_CLAUSES } from '../pages/InfoTables/MainTable/TabsPanel/Filters/constants';
import { TAB_NAMES } from '../constants/tabs';
import { FiltersType } from '../pages/InfoTables/MainTable/TabsPanel/Filters/types';

export type SnakeToCamelCaseType = (arg: string) => string;

export type ObjectKeysToCamelFromSnakeCase = (arg: { [key: string]: any }) => {
  [key: string]: any;
};

export type DateArgType = Date | string | undefined;

export type DateFormatterType = (date: DateArgType) => string;

export type CheckDateValidType = (date: DateArgType) => boolean;

export type FormatWithCheckType = (
  date: DateArgType,
  callBack?: DateFormatterType
) => string;

export type GetNumberFromStringType = (string: number | string) => number;

export type GetNullableNumbersType = (
  string: number | string,
  withNull?: boolean
) => number | null;

export type GetNullFromEmptyStringType = (arg: string) => null | string;

export type FormatDateToSqlDateType = (arg: Required<DateArgType>) => string;

export type SortDatesByAscendingType = <T extends any[]>(dates: T) => T;

export type FilterNameType = `filter.${Exclude<
  FiltersType[number]['name'],
  '' | 'id'
>}.${GetOptionalType<typeof FILTER_CLAUSES>}`;

export type GetNotEmptyFiltersArgsType = {
  filters: FiltersType;
  selectedTabName: GetOptionalType<typeof TAB_NAMES>;
};

export type GetTransformFilterDatesType = (dates: string[]) => string[];
