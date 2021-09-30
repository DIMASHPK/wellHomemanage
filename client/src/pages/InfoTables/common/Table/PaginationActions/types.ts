import React from 'react';
import { OnPageChangeType } from '../types';

export type HandleClickTypes = (
  event: React.MouseEvent<HTMLButtonElement> | null
) => void;

export interface TablePaginationActionsType {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: OnPageChangeType;
}
