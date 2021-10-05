export type getOptionalType<T> = T extends { [key: string]: infer U }
  ? U
  : never;

export type UnionToIntersectionType<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;
