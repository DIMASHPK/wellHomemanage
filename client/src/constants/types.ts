export type GetOptionalType<T> = T extends { [key: string]: infer U }
  ? U
  : never;

export type UnionToIntersectionType<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

type Alph =
  | 'Q'
  | 'W'
  | 'E'
  | 'R'
  | 'T'
  | 'Y'
  | 'U'
  | 'I'
  | 'O'
  | 'P'
  | 'A'
  | 'S'
  | 'D'
  | 'F'
  | 'G'
  | 'H'
  | 'J'
  | 'K'
  | 'L'
  | 'X'
  | 'Z'
  | 'C'
  | 'V'
  | 'B'
  | 'N'
  | 'M';

export type CamelToSnake<T> = T extends `${infer S1}${Alph}${string}`
  ? T extends `${S1}${infer S2}`
    ? `${Lowercase<S1>}_${CamelToSnake<Uncapitalize<S2>>}`
    : T
  : T;

export type CamelToSnakeKeys<
  T extends {
    [Key in keyof T]: T[Key];
  }
> = { [Property in keyof T as CamelToSnake<Property>]: T[Property] };
