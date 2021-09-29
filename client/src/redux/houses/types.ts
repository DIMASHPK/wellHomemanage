export interface HouseType {
  id: number;
  address: string;
  buildingMaterial: string;
  area: number | string;
  landArea: number | string;
  quantityOfRooms: number;
  description: string;
  price: string | number;
  pricePerMeter: string | number;
  commission: number | string;
  number: string;
  whoGave: string;
  stateOfLid: string;
  descriptionOfClient: string;
  managerOfObject: string;
  dateOfStartAd?: string;
  dateOfSold?: string;
  soldPrice?: number | string;
}

export interface HousesStateType {
  houses: HouseType[];
  selectedCells: number[];
  selectedAll: boolean;
  count: number;
  page: number;
  rowsPerPage: number;
}

export interface HouseResponseInterface {
  count: number;
  data: HouseType[];
}
