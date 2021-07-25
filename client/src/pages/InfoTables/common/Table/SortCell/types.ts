import React from 'react';
import { HeadColumnType } from '../types';

export interface SortCellType extends Omit<HeadColumnType, 'id'> {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
