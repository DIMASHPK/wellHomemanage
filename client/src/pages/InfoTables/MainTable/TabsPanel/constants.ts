import { TAB_NAMES } from 'constants/tabs';
import { RootState } from 'redux/types';

export const EDIT_DATA_MAPPING = {
  [TAB_NAMES.FLATS]: {
    title: 'Квартиры',
    getCount: (state: RootState) => state.flats.selectedCells.length,
  },
  [TAB_NAMES.HOUSES]: {
    title: 'Дома',
    getCount: (state: RootState) => state.houses.selectedCells.length,
  },
  [TAB_NAMES.EXCLUSIVES]: {
    title: 'Эксклюзивы',
    getCount: (state: RootState) => state.exclusives.selectedCells.length,
  },
} as const;
