import { OrderOptionType } from 'api/types';
import { AppThunk } from 'redux/types';
import { getNotEmptyFilters } from 'pages/InfoTables/MainTable/TabsPanel/Filters/helpers';
import { UseFormValuesType } from 'pages/InfoTables/MainTable/TabsPanel/Filters/types';

export interface ExclusiveType {
  id: number;
  address: string;
  typeOfHouse: string;
  floor: number;
  area: number;
  description: string;
  reservePrice: number;
  startPrice: number;
  endPrice: number | null;
  preSalePrepare: string[] | null;
  adStart: string | null;
  incomingCalls: number | null;
  incomingSocial: number | null;
  crmNumberAndDescriptionOfClient: string | null;
  watchingDays: string[] | null;
  signUpForView: number | null;
  visited: number | null;
  offers: number | null;
  deposit: string | null;
  deal: string | null;
  commission: number;
  adCost: number | null;
}

export interface ExclusiveState {
  exclusives: ExclusiveType[];
  selectedCells: number[];
  selectedAll: boolean;
  count: number;
  page: number;
  rowsPerPage: number;
  orderBy: string;
  orderOption: OrderOptionType;
  filters: UseFormValuesType['filters'];
}

export interface AddDataType {
  exclusives: Omit<ExclusiveType, 'id'>[];
}

export interface UpdateDataType {
  exclusives: ExclusiveType[];
}

export type GetExclusivesType = (
  filters?: ReturnType<typeof getNotEmptyFilters>
) => AppThunk;
