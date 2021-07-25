import React from 'react';

export interface HeadColumnType {
  title: string | JSX.Element;
  className?: string;
  id: string | number;
  isSort?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  canHide?: boolean;
  value?: string;
}

export interface TablePropsType {
  headColumns: HeadColumnType[];
  stickyHeader: boolean;
  classes?: {
    tableContainer?: string;
  };
}
