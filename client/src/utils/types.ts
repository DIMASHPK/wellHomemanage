import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { Moment } from 'moment';

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
