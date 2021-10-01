import { TAB_NAMES } from 'constants/tabs';
import { FlatType } from 'redux/flats/types';
import { HouseType } from 'redux/houses/types';
import { ExclusiveType } from 'redux/exclusive/types';
import { getOptionalType } from 'constants/types';
import { VALUES_ARRAY_NAME } from './constants';
import { GetDefaultValuesArgsType, GetDefaultValuesReturnType } from './types';

export const getFilteredArray = <T extends getOptionalType<typeof TAB_NAMES>>(
  data: (FlatType | HouseType | ExclusiveType)[],
  selectedCells: number[],
  type: T
): GetDefaultValuesReturnType['tableForm'] =>
  data
    .map(item => ({ ...item, type }))
    .filter(({ id }) =>
      selectedCells.includes(id)
    ) as GetDefaultValuesReturnType['tableForm'];

export const getDefaultValues = ({
  state,
  type,
}: GetDefaultValuesArgsType): GetDefaultValuesReturnType => {
  const { selectedCells } = state[type];

  const mapping = {
    [TAB_NAMES.FLATS]: getFilteredArray(
      state.flats.flats,
      selectedCells,
      TAB_NAMES.FLATS
    ),
    [TAB_NAMES.HOUSES]: getFilteredArray(
      state.houses.houses,
      selectedCells,
      TAB_NAMES.HOUSES
    ),
    [TAB_NAMES.EXCLUSIVES]: getFilteredArray(
      state.exclusives.exclusives,
      selectedCells,
      TAB_NAMES.EXCLUSIVES
    ),
  };

  const t = mapping[type];

  return {
    [VALUES_ARRAY_NAME]: t,
  };
};
