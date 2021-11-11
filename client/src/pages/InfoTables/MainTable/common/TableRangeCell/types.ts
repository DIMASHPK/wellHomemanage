import { TableCellPropsType } from '../TableCell/types';

export interface TableRangeCellPropsType extends TableCellPropsType {
  value: string[] | Date[] | null;
}
