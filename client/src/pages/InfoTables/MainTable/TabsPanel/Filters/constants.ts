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
  soldPrice: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  quantityOfRooms: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  address: { value: '', component: Input, label: 'Введите значение' },
  dateOfSold: { value: [], component: DatePicker, label: 'Выбирите даты' },
  number: { value: '', component: Input, label: 'Введите значение' },
  commission: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  pricePerMeter: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  price: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  description: { value: '', component: Input, label: 'Введите значение' },
  typeOfHouse: { value: '', component: Input, label: 'Введите значение' },
  numberOfStoreys: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  floor: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  area: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  buildingMaterial: { value: '', component: Input, label: 'Введите значение' },
  whoGave: { value: '', component: Input, label: 'Введите значение' },
} as const;

export const HOUSE_FILTER_INPUTS = {
  landArea: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  address: { value: '', component: Input, label: 'Введите значение' },
  area: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  buildingMaterial: { value: '', component: Input, label: 'Введите значение' },
  commission: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
  },
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
  price: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  pricePerMeter: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  quantityOfRooms: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  soldPrice: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  stateOfLid: { value: '', component: Input, label: 'Введите значение' },
  whoGave: { value: '', component: Input, label: 'Введите значение' },
} as const;

export const EXCLUSIVE_FILTER_INPUTS = {
  adCost: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  address: { value: '', component: Input, label: 'Введите значение' },
  adStart: { value: [], component: DatePicker, label: 'Выбирите даты' },
  area: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  commission: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  crmNumberAndDescriptionOfClient: {
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  deal: { value: '', component: DatePicker, label: 'Выбирите даты' },
  deposit: {
    value: '',
    component: DatePicker,
    label: 'Выбирите даты',
  },
  description: { value: '', component: Input, label: 'Введите значение' },
  endPrice: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  floor: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  incomingCalls: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  incomingSocial: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  offers: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  preSalePrepare: { value: [], component: DatePicker, label: 'Выбирите даты' },
  reservePrice: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  signUpForView: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  startPrice: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  typeOfHouse: { value: '', component: Input, label: 'Введите значение' },
  visited: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
  },
  watchingDays: { value: [], component: DatePicker, label: 'Выбирите даты' },
} as const;

export const INPUT_FILTERS_MAPPING = {
  [TAB_NAMES.FLATS]: FLAT_FILTER_INPUTS,
  [TAB_NAMES.HOUSES]: HOUSE_FILTER_INPUTS,
  [TAB_NAMES.EXCLUSIVES]: EXCLUSIVE_FILTER_INPUTS,
} as const;
