import { FiltersType } from 'pages/InfoTables/MainTable/TabsPanel/Filters/types';
import { OrderOptionType } from 'api/types';
import { AppThunk } from 'redux/types';

export interface FlatType {
  id: number;
  address: string;
  floor: number;
  numberOfStoreys: number;
  quantityOfRooms: number;
  buildingMaterial: string;
  typeOfHouse: string;
  area: number;
  description: string;
  price: number;
  pricePerMeter: number;
  commission: number;
  number: string;
  whoGave: string;
  stateOfLid: string;
  descriptionOfClient: string;
  managerOfObject: string;
  dateOfStartAd: string | null;
  dateOfSold: string | null;
  soldPrice: number | null;
}

export interface FlatsState {
  flats: FlatType[];
  selectedCells: number[];
  selectedAll: boolean;
  count: number;
  page: number;
  rowsPerPage: number;
  orderBy: string;
  orderOption: OrderOptionType;
}

export interface AddDataType {
  flats: Omit<FlatType, 'id'>[];
}

export interface UpdateDataType {
  flats: FlatType[];
}

export type GetFlatsType = (filters?: FiltersType) => AppThunk;
