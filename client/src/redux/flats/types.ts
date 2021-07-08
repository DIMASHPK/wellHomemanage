export interface FlatType {
  id: number;
  address: string;
  floor: number;
  numberOfStoreys: number;
  quantityOfRooms: number;
  buildingMaterial: string;
  typeOfHouse: string;
  square: number | string;
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

export interface FlatsState {
  flats: FlatType[];
  selectedCells: number[];
  selectedAll: boolean;
}
