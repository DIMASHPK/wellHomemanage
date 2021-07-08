export interface HeadColumnType {
  title: string | JSX.Element;
  className?: string;
  id: string | number;
}

export interface TablePropsType {
  headColumns: HeadColumnType[];
  stickyHeader: boolean;
  classes?: {
    tableContainer?: string;
  };
}
