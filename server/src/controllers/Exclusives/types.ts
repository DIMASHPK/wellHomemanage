import Exclusive from 'models/Exclusives';

export interface ExclusiveBodyType {
  exclusives: Exclusive[];
}

export interface ExclusiveRemoveBodyType {
  ids: number[];
}
