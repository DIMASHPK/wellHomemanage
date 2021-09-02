import { tabItemType } from 'components/TabsPanel/types';
import { TAB_NAMES } from 'constants/tabs';

export const tabs: tabItemType[] = [
  { label: 'Квартиры', value: 0, name: TAB_NAMES.FLATS },
  { label: 'Дома', value: 1, name: TAB_NAMES.HOUSES },
  { label: 'Эксклюзив', value: 2, name: TAB_NAMES.EXCLUSIVES },
];

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
