export type SnakeToCamelCaseType = (arg: string) => string;
export type ObjectKeysToCamelFromSnakeCase = (arg: { [key: string]: any }) => {
  [key: string]: any;
};
