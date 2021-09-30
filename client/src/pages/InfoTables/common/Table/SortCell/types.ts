import React from 'react';
import { HeadColumnType, TablePropsType } from '../types';

export interface SortCellType
  extends Omit<HeadColumnType, 'id'>,
    Pick<TablePropsType, 'orderBy' | 'orderDirection' | 'onOrderBy'> {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
