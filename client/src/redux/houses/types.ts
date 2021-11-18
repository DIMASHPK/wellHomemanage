import { getNotEmptyFilters } from 'pages/InfoTables/MainTable/TabsPanel/Filters/helpers';
import { OrderOptionType } from 'api/types';
import { AppThunk } from 'redux/types';
import { UseFormValuesType } from 'pages/InfoTables/MainTable/TabsPanel/Filters/types';

export interface HouseType {
  id: number;
  address: string;
  buildingMaterial: string;
  area: number;
  landArea: number;
  quantityOfRooms: number;
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

export interface HousesStateType {
  houses: HouseType[];
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
  houses: Omit<HouseType, 'id'>[];
}

export interface UpdateDataType {
  houses: HouseType[];
}

export type GetHousesType = (
  filters?: ReturnType<typeof getNotEmptyFilters>
) => AppThunk;
