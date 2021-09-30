export const camelToSnakeCase = (str: string): string =>
  str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

export const camelToSnakeKeysOfArrayObject = (arr: any[]): any[] =>
  arr.map(item =>
    Object.entries(item)
      .map(([key, value]) => ({
        [camelToSnakeCase(key)]: value,
      }))
      .reduce((acc, item) => ({ ...acc, ...item }), {})
  );
