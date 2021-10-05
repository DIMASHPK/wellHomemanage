import { OrderOptionType } from 'api/types';

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
}

export interface AddDataType {
  [key: string]: Omit<ExclusiveType, 'id'>[];
}
