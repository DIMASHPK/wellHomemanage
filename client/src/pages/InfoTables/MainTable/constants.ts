import { tabItemType } from 'components/TabsPanel/types';
import { TAB_NAMES } from 'constants/tabs';

export const tabs: tabItemType[] = [
  { label: 'Квартиры', value: 0, name: TAB_NAMES.FLATS },
  { label: 'Дома', value: 1, name: TAB_NAMES.HOUSES },
  { label: 'Эксклюзив', value: 2, name: TAB_NAMES.EXCLUSIVE },
];
