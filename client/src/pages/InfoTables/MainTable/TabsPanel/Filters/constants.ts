import { FilterInput as Input } from 'components/fields/Input/Form';
import { FilterRangePicker as DatePicker } from 'components/fields/DateMultiPicker/Form';
import { TAB_NAMES } from 'constants/tabs';

export const VALUES_ARRAY_NAME = 'filters';

export const FILTER_COND_ITEMS = {
  OR: 'or',
  AND: 'and',
};

export const FILTER_CLAUSES = {
  EQ: 'eq',
  I_LIKE: 'iLike',
  BETWEEN: 'between',
  RANGE_BETWEEN: 'rangeBetween',
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
  stateOfLid: {
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.I_LIKE,
  },
  descriptionOfClient: {
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.I_LIKE,
  },
  managerOfObject: {
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.I_LIKE,
  },
  dateOfStartAd: {
    value: [],
    component: DatePicker,
    label: 'Выбирите даты',
    datesLimit: 2,
    filter: FILTER_CLAUSES.BETWEEN,
  },
  soldPrice: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.EQ,
  },
  quantityOfRooms: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.EQ,
  },
  address: {
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.I_LIKE,
  },
  dateOfSold: {
    value: [],
    component: DatePicker,
    label: 'Выбирите даты',
    datesLimit: 2,
    filter: FILTER_CLAUSES.BETWEEN,
  },
  number: {
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.I_LIKE,
  },
  commission: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.EQ,
  },
  pricePerMeter: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.EQ,
  },
  price: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.EQ,
  },
  description: {
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.I_LIKE,
  },
  typeOfHouse: {
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.I_LIKE,
  },
  numberOfStoreys: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.EQ,
  },
  floor: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.EQ,
  },
  area: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.EQ,
  },
  buildingMaterial: {
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.I_LIKE,
  },
  whoGave: {
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.I_LIKE,
  },
} as const;

export const HOUSE_FILTER_INPUTS = {
  landArea: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.EQ,
  },
  address: {
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.I_LIKE,
  },
  area: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.EQ,
  },
  buildingMaterial: {
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.I_LIKE,
  },
  commission: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.EQ,
  },
  dateOfSold: {
    value: [],
    component: DatePicker,
    label: 'Выбирите даты',
    datesLimit: 2,
    filter: FILTER_CLAUSES.BETWEEN,
  },
  dateOfStartAd: {
    value: [],
    component: DatePicker,
    label: 'Выбирите даты',
    datesLimit: 2,
    filter: FILTER_CLAUSES.BETWEEN,
  },
  description: {
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.I_LIKE,
  },
  descriptionOfClient: {
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.I_LIKE,
  },
  managerOfObject: {
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.I_LIKE,
  },
  number: {
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.I_LIKE,
  },
  price: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.EQ,
  },
  pricePerMeter: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.EQ,
  },
  quantityOfRooms: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.EQ,
  },
  soldPrice: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.EQ,
  },
  stateOfLid: {
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.I_LIKE,
  },
  whoGave: {
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.I_LIKE,
  },
} as const;

export const EXCLUSIVE_FILTER_INPUTS = {
  adCost: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.EQ,
  },
  address: {
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.I_LIKE,
  },
  adStart: {
    value: [],
    component: DatePicker,
    label: 'Выбирите даты',
    datesLimit: 2,
    filter: FILTER_CLAUSES.BETWEEN,
  },
  area: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.EQ,
  },
  commission: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.EQ,
  },
  crmNumberAndDescriptionOfClient: {
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.I_LIKE,
  },
  deal: {
    value: '',
    component: DatePicker,
    label: 'Выбирите даты',
    datesLimit: 2,
    filter: FILTER_CLAUSES.BETWEEN,
  },
  deposit: {
    value: '',
    component: DatePicker,
    label: 'Выбирите даты',
    datesLimit: 2,
    filter: FILTER_CLAUSES.BETWEEN,
  },
  description: {
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.I_LIKE,
  },
  endPrice: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.EQ,
  },
  floor: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.EQ,
  },
  incomingCalls: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.EQ,
  },
  incomingSocial: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.EQ,
  },
  offers: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.EQ,
  },
  preSalePrepare: {
    value: [],
    component: DatePicker,
    label: 'Выбирите даты',
    datesLimit: 2,
    filter: FILTER_CLAUSES.RANGE_BETWEEN,
  },
  reservePrice: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.EQ,
  },
  signUpForView: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.EQ,
  },
  startPrice: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.EQ,
  },
  typeOfHouse: {
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.I_LIKE,
  },
  visited: {
    type: 'number',
    value: '',
    component: Input,
    label: 'Введите значение',
    filter: FILTER_CLAUSES.EQ,
  },
  watchingDays: {
    value: [],
    component: DatePicker,
    label: 'Выбирите даты',
    datesLimit: 2,
    filter: FILTER_CLAUSES.RANGE_BETWEEN,
  },
} as const;

export const INPUT_FILTERS_MAPPING = {
  [TAB_NAMES.FLATS]: FLAT_FILTER_INPUTS,
  [TAB_NAMES.HOUSES]: HOUSE_FILTER_INPUTS,
  [TAB_NAMES.EXCLUSIVES]: EXCLUSIVE_FILTER_INPUTS,
} as const;
