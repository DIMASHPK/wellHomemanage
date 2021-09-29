import { numberlike } from 'moment/moment';

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
  dateOfStartAd?: string;
  dateOfSold?: string;
  soldPrice?: number;
}

export interface FlatsState {
  flats: FlatType[];
  selectedCells: number[];
  selectedAll: boolean;
  count: number;
}

export interface FlatResponseInterface {
  count: number;
  data: FlatType[];
}
