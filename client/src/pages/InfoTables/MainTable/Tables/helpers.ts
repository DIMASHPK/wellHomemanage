import {
  GetHiddenFieldsType,
  GetIsCellVisibleArgsType,
  ReformattedRowDataType,
} from './types';

export const getReformattedRowData = <
  T extends { [Property in keyof T]: T[Property] }
>(
  tableRow: T
) =>
  Object.entries(tableRow).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: { keyMap: key, value } }),
    {}
  ) as ReformattedRowDataType<typeof tableRow>;

export const getIsCellVisible = ({
  keyName,
  hiddenColumns,
  pathForHiddenColumnsState,
}: GetIsCellVisibleArgsType) =>
  Boolean(
    !keyName?.length
      ? true
      : !hiddenColumns?.[pathForHiddenColumnsState]?.[keyName]
  );

export const getHiddenFields: GetHiddenFieldsType = (state, prevState) => {
  let hiddenColumns = Object.entries(state)
    .map(([key, [value] = [{}]]) => ({
      [key]: (value ? Object.keys(value) : [])
        .map(item => ({ [item]: false }))
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
