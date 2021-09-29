import { RefObject } from 'react';

export interface EmptyRowTypes {
  title: string;
  colSpan: number;
  className?: string;
}

export interface HandleWidthArgsType {
  ref: RefObject<HTMLDivElement>;
}
