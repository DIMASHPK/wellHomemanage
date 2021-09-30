export type getOptionalType<T> = T extends { [key: string]: infer U }
  ? U
  : never;
