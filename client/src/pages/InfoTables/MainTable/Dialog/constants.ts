import { TAB_NAMES } from 'constants/tabs';
import { INPUT_FIELDS as EXCLUSIVE_INPUT_FIELDS } from './ExclusiveForm/constants';
import { INPUT_FIELDS as FLATS_INPUT_FIELDS } from './FlatForm/constants';
import { INPUT_FIELDS as HOUSES_INPUT_FIELDS } from './HouseForm/constants';

const initValueForMultiplyDate: Date[] = [];

export const INITIAL_FLAT_VALUES = {
  stateOfLid: '',
  descriptionOfClient: '',
  managerOfObject: '',
  dateOfStartAd: null,
  soldPrice: '',
  quantityOfRooms: 0,
  address: '',
  dateOfSold: null,
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
};

export const INITIAL_HOUSE_VALUES = {
  landArea: 0,
  address: '',
  area: 0,
  buildingMaterial: '',
  commission: 0,
  dateOfSold: null,
  dateOfStartAd: null,
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
};

export const INITIAL_EXCLUSIVE_VALUES = {
  adCost: 0,
  address: '',
  adStart: null,
  area: 0,
  commission: 0,
  crmNumberAndDescriptionOfClient: '',
  deal: null,
  deposit: null,
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
};

export const INITIAL_VALUES_MAPPING = {
  [TAB_NAMES.FLATS]: { ...INITIAL_FLAT_VALUES, type: TAB_NAMES.FLATS },
  [TAB_NAMES.HOUSES]: { ...INITIAL_HOUSE_VALUES, type: TAB_NAMES.HOUSES },
  [TAB_NAMES.EXCLUSIVES]: {
    ...INITIAL_EXCLUSIVE_VALUES,
    type: TAB_NAMES.EXCLUSIVES,
  },
};

export const VALUES_ARRAY_NAME = 'tableForm';

export const INPUTS_MAPPING = {
  [TAB_NAMES.FLATS]: FLATS_INPUT_FIELDS,
  [TAB_NAMES.HOUSES]: HOUSES_INPUT_FIELDS,
  [TAB_NAMES.EXCLUSIVES]: EXCLUSIVE_INPUT_FIELDS,
} as const;

export const SUBMIT_KEYS = {
  EDIT: 'EDIT',
  CREATE: 'CREATE',
} as const;
