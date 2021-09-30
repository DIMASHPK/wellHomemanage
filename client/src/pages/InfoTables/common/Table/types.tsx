import React, { ReactNode, Ref } from 'react';
import { OrderOptionType } from 'api/types';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

export interface HeadColumnType {
  title: string | JSX.Element;
  className?: string;
  id: string | number;
  isSort?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  canHide?: boolean;
  value?: string;
}

export type OnPageChangeType = (
  event: React.MouseEvent<HTMLButtonElement> | null,
  page: number
) => void;

export interface TablePropsType {
  headColumns: HeadColumnType[];
  stickyHeader: boolean;
  classes?: {
    tableContainer?: string;
  };
  children?: (data: { ref: Ref<HTMLDivElement> | undefined }) => ReactNode;
  loading?: boolean;
  withPagination?: boolean;
  count?: number;
  rowsPerPage?: number;
  page?: number;
  onPageChange?: OnPageChangeType;
  onRowsPerPageChange?: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  orderBy: string;
  orderDirection: OrderOptionType;
  onOrderBy: ActionCreatorWithPayload<
    { orderBy: string; orderOption: OrderOptionType },
    string
  >;
}

export interface WithPaginationPaddingHandlerArgs {
  withPagination: boolean;
}
