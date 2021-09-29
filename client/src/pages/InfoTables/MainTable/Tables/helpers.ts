import type { RootState } from 'redux/types';

export interface getHiddenFieldsReturnType {
  [x: string]: { [x: string]: boolean };
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getHiddenFieldsStateType = ({
  flats: { flats },
  houses: { houses },
  exclusives: { exclusives },
}: RootState) => ({ flats, houses, exclusives });

export const getHiddenFields = (
  state: ReturnType<typeof getHiddenFieldsStateType>
): getHiddenFieldsReturnType =>
  Object.entries(state)
    .map(([key, [value] = [{}]]) => ({
      [key]: (value ? Object.keys(value) : [])
        .map(item => ({ [item]: false }))
        .reduce((prev, item) => ({ ...prev, ...item }), {}),
    }))
    .reduce((prev, item) => ({ ...prev, ...item }), {});
