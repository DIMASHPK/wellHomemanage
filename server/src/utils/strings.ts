import { CamelObjectToSnake, CamelPropToSnake } from './types';

export const camelToSnakeCase = <T extends PropertyKey>(
  str: T
): CamelPropToSnake<T> =>
  (str as string).replace(
    /[A-Z]/g,
    letter => `_${letter.toLowerCase()}`
  ) as CamelPropToSnake<T>;

const camelCaseObject = <T extends { [key: string]: any }>(obj: T) =>
  Object.entries(obj).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [camelToSnakeCase(key as keyof T)]: value,
    }),
    {} as CamelObjectToSnake<T>
  );

export const camelToSnakeKeysOfArrayObject = <
  T extends Array<{ [key: string]: any }>
>(
  arr: T
): {
  [K in keyof T]: CamelObjectToSnake<T[K]>;
} =>
  arr.map(camelCaseObject) as {
    [K in keyof T]: CamelObjectToSnake<T[K]>;
  };
