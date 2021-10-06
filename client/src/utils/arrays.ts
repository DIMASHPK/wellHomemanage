export const getNullFromEmptyArrray = <T extends unknown>(
  array: T[]
): T[] | null => (array.length ? array : null);
