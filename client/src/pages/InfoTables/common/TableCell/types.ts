import { StyledComponentProps, TableCellProps } from '@material-ui/core';

export interface TableCellType extends TableCellProps {
  classes?: StyledComponentProps['classes'];
}
