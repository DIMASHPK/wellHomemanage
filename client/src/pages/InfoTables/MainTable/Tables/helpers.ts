import { GetHiddenFieldsType } from './types';

export const getHiddenFields: GetHiddenFieldsType = (state, prevState) => {
  let hiddenColumns = Object.entries(state)
    .map(([key, [value] = [{}]]) => ({
      [key]: (value ? Object.keys(value) : [])
        .map(item => ({ [item]: false, isHiddenTransformed: true }))
        .reduce((prev, item) => ({ ...prev, ...item }), {}),
    }))
    .reduce((prev, item) => ({ ...prev, ...item }), {});

  Object.keys(hiddenColumns).forEach(key => {
    hiddenColumns = {
      ...hiddenColumns,
      [key]: {
        ...hiddenColumns[key],
        ...prevState?.[key],
      },
    };
  });

  return {
    ...hiddenColumns,
  };
};
