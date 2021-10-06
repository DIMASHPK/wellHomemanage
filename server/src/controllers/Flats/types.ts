import Flat from 'models/Flats';

export interface FlatBodyType {
  flats: Flat[];
}

export interface FlatRemoveBodyType {
  ids: number[];
}
