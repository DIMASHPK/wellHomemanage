import omit from 'lodash/omit';
import { objectKeysToCamelFromSnakeCase } from './strings';

export const getDataWithCreatedData = <
  T extends { created_at: string; updated_at: string }
>(
  item: T
) => {
  const data = omit<T>(item, ['created_at', 'updated_at']);

  return objectKeysToCamelFromSnakeCase(data);
};
