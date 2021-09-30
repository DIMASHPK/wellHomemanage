import { OrderOptionType } from 'api/types';

export interface ExclusiveType {
  id: number;
  address: string;
  typeOfHouse: string;
  floor: number;
  area: number | string;
  description: string;
  reservePrice: string | number;
  startPrice: string | number;
  endPrice: string | number;
  preSalePrepare: Date[];
  adStart: string;
  incomingCalls: number;
  incomingSocial: number;
  crmNumberAndDescriptionOfClient: string;
  watchingDays: Date[];
  signUpForView: number;
  visited: number;
  offers: number;
  deposit: string;
  deal: string;
  commission: number | string;
  adCost: number;
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
