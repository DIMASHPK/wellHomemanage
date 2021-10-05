import { GetNullableNumbersType, GetNumberFromStringType } from './types';

export const getNumberFromString: GetNumberFromStringType = str => {
  if (typeof str === 'number') return str;

  return Number.isNaN(parseInt(str)) ? 0 : parseInt(str);
};

export const getNullableNumbers: GetNullableNumbersType = str => {
  if (typeof str === 'string' && !str.length) return null;

  return getNumberFromString(str);
};
