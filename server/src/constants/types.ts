export type getOptionalType<T> = T extends { [key: string]: infer U }
  ? U
  : never;

export type FiltersType = {
  [x: string]: string;
};
