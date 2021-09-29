import { ObjectKeysToCamelFromSnakeCase, SnakeToCamelCaseType } from './types';

export const snakeToCamelCase: SnakeToCamelCaseType = (s: string): string =>
  s.replace(/([-_][a-z])/gi, $1 =>
    $1.toUpperCase().replace('-', '').replace('_', '')
  );

export const objectKeysToCamelFromSnakeCase: ObjectKeysToCamelFromSnakeCase =
  object =>
    Object.entries(object)
      .map(([key, value]) => ({
        [snakeToCamelCase(key)]: value,
      }))
      .reduce((acc, item) => ({ ...acc, ...item }), {});
