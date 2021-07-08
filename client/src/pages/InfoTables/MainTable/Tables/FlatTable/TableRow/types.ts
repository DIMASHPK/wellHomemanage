import type { FlatType } from 'redux/flats/types';
import { TableRowProps } from '@material-ui/core';

export interface TableRowTypes extends TableRowProps {
  tableRow: FlatType;
}

export interface stylesTypes {
  isCheck: boolean;
}
