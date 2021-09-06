import { FilterInput as Input } from 'components/fields/Input/Form';
import { FilterRangePicker as DatePicker } from 'components/fields/DateMultiPicker/Form';
import { TAB_NAMES } from 'constants/tabs';

export const VALUES_ARRAY_NAME = 'filters';

export const FILTER_COND_ITEMS = {
  OR: 'or',
  AND: 'and',
} as const;

export const FILTER_COND_ITEM_OPTIONS = {
  [FILTER_COND_ITEMS.OR]: {
    name: 'или',
    value: FILTER_COND_ITEMS.OR,
  },
  [FILTER_COND_ITEMS.AND]: {
    name: 'и',
    value: FILTER_COND_ITEMS.AND,
  },
};

export const FLAT_FILTER_INPUTS = {
  stateOfLid: { value: '', component: Input, label: 'Введите значение' },
  descriptionOfClient: {
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  managerOfObject: { value: '', component: Input, label: 'Введите значение' },
  dateOfStartAd: { value: [], component: DatePicker, label: 'Выбирите даты' },
  soldPrice: { value: '', component: Input, label: 'Введите значение' },
  quantityOfRooms: { value: '', component: Input, label: 'Введите значение' },
  address: { value: '', component: Input, label: 'Введите значение' },
  dateOfSold: { value: [], component: DatePicker, label: 'Выбирите даты' },
  number: { value: '', component: Input, label: 'Введите значение' },
  commission: { value: '', component: Input, label: 'Введите значение' },
  pricePerMeter: { value: '', component: Input, label: 'Введите значение' },
  price: { value: '', component: Input, label: 'Введите значение' },
  description: { value: '', component: Input, label: 'Введите значение' },
  typeOfHouse: { value: '', component: Input, label: 'Введите значение' },
  numberOfStoreys: { value: '', component: Input, label: 'Введите значение' },
  floor: { value: '', component: Input, label: 'Введите значение' },
  area: { value: '', component: Input, label: 'Введите значение' },
  buildingMaterial: { value: '', component: Input, label: 'Введите значение' },
  whoGave: { value: '', component: Input, label: 'Введите значение' },
} as const;

export const HOUSE_FILTER_INPUTS = {
  landArea: { value: '', component: Input, label: 'Введите значение' },
  address: { value: '', component: Input, label: 'Введите значение' },
  area: { value: '', component: Input, label: 'Введите значение' },
  buildingMaterial: { value: '', component: Input, label: 'Введите значение' },
  commission: { value: '', component: Input, label: 'Введите значение' },
  dateOfSold: { value: [], component: DatePicker, label: 'Выбирите даты' },
  dateOfStartAd: { value: [], component: DatePicker, label: 'Выбирите даты' },
  description: { value: '', component: Input, label: 'Введите значение' },
  descriptionOfClient: {
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  managerOfObject: { value: '', component: Input, label: 'Введите значение' },
  number: { value: '', component: Input, label: 'Введите значение' },
  price: { value: '', component: Input, label: 'Введите значение' },
  pricePerMeter: { value: '', component: Input, label: 'Введите значение' },
  quantityOfRooms: { value: '', component: Input, label: 'Введите значение' },
  soldPrice: { value: '', component: Input, label: 'Введите значение' },
  stateOfLid: { value: '', component: Input, label: 'Введите значение' },
  whoGave: { value: '', component: Input, label: 'Введите значение' },
} as const;

export const EXCLUSIVE_FILTER_INPUTS = {
  adCost: { value: '', component: Input, label: 'Введите значение' },
  address: { value: '', component: Input, label: 'Введите значение' },
  adStart: { value: [], component: DatePicker, label: 'Выбирите даты' },
  area: { value: '', component: Input, label: 'Введите значение' },
  commission: { value: '', component: Input, label: 'Введите значение' },
  crmNumberAndDescriptionOfClient: {
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  deal: { value: '', component: Input, label: 'Введите значение' },
  deposit: { value: '', component: Input, label: 'Введите значение' },
  description: { value: '', component: Input, label: 'Введите значение' },
  endPrice: { value: '', component: Input, label: 'Введите значение' },
  floor: { value: '', component: Input, label: 'Введите значение' },
  incomingCalls: { value: '', component: Input, label: 'Введите значение' },
  incomingSocial: { value: '', component: Input, label: 'Введите значение' },
  offers: { value: '', component: Input, label: 'Введите значение' },
  preSalePrepare: { value: [], component: DatePicker, label: 'Выбирите даты' },
  reservePrice: { value: '', component: Input, label: 'Введите значение' },
  signUpForView: { value: '', component: Input, label: 'Введите значение' },
  startPrice: { value: '', component: Input, label: 'Введите значение' },
  typeOfHouse: { value: '', component: Input, label: 'Введите значение' },
  visited: { value: '', component: Input, label: 'Введите значение' },
  watchingDays: { value: [], component: DatePicker, label: 'Выбирите даты' },
} as const;

export const INPUT_FILTERS_MAPPING = {
  [TAB_NAMES.FLATS]: FLAT_FILTER_INPUTS,
  [TAB_NAMES.HOUSES]: HOUSE_FILTER_INPUTS,
  [TAB_NAMES.EXCLUSIVES]: EXCLUSIVE_FILTER_INPUTS,
} as const;
