import House from 'models/Houses';

export interface HouseBodyType {
  houses: House[];
}

export interface HouseRemoveBodyType {
  ids: number[];
}
