import { OrderOptionType } from 'api/types';

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
  [key: string]: Omit<FlatType, 'id'>[];
}
