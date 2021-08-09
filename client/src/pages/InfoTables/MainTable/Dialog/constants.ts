import { TAB_NAMES } from 'constants/tabs';

const initValueForMultiplyDate = [new Date()];

export const INITIAL_FLAT_VALUES = {
  stateOfLid: '',
  descriptionOfClient: '',
  managerOfObject: '',
  dateOfStartAd: '',
  soldPrice: '',
  quantityOfRooms: 0,
  address: '',
  dateOfSold: '',
  number: '',
  commission: 0,
  pricePerMeter: 0,
  price: 0,
  description: '',
  typeOfHouse: '',
  numberOfStoreys: 0,
  floor: 0,
  area: '',
  buildingMaterial: '',
  whoGave: '',
} as const;

export const INITIAL_HOUSE_VALUES = {
  landArea: 0,
  address: '',
  area: 0,
  buildingMaterial: '',
  commission: 0,
  dateOfSold: '',
  dateOfStartAd: '',
  description: '',
  descriptionOfClient: '',
  managerOfObject: '',
  number: '',
  price: 0,
  pricePerMeter: 0,
  quantityOfRooms: 0,
  soldPrice: 0,
  stateOfLid: '',
  whoGave: '',
} as const;

export const INITIAL_EXCLUSIVE_VALUES = {
  adCost: 0,
  address: '',
  adStart: '',
  area: 0,
  commission: 0,
  crmNumberAndDescriptionOfClient: '',
  deal: '',
  deposit: '',
  description: '',
  endPrice: 0,
  floor: 0,
  incomingCalls: 0,
  incomingSocial: 0,
  offers: 0,
  preSalePrepare: initValueForMultiplyDate,
  reservePrice: 0,
  signUpForView: 0,
  startPrice: 0,
  typeOfHouse: '',
  visited: 0,
  watchingDays: initValueForMultiplyDate,
} as const;

export const INITIAL_VALUES_MAPPING = {
  [TAB_NAMES.FLATS]: INITIAL_FLAT_VALUES,
  [TAB_NAMES.HOUSES]: INITIAL_HOUSE_VALUES,
  [TAB_NAMES.EXCLUSIVES]: INITIAL_EXCLUSIVE_VALUES,
} as const;

export const VALUES_ARRAY_NAME = 'tableForm';
