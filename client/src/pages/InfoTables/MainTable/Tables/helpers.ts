import type { RootState } from 'redux/types';

export interface getHiddenFieldsReturnType {
  [x: string]: { [x: string]: boolean };
}

const getHiddenFieldsStateType = ({
  flats: { flats },
  houses: { houses },
}: RootState) => ({ flats, houses });

export const getHiddenFields = (
  state: ReturnType<typeof getHiddenFieldsStateType>
): getHiddenFieldsReturnType =>
  Object.entries(state)
    .map(([key, [value]]) => ({
      [key]: Object.keys(value)
        .map(item => ({ [item]: false }))
        .reduce((prev, item) => ({ ...prev, ...item }), {}),
    }))
    .reduce((prev, item) => ({ ...prev, ...item }), {});
