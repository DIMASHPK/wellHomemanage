import { HouseType } from 'redux/houses/types';
import { ExclusiveType } from 'redux/exclusive/types';
import { FlatType } from 'redux/flats/types';
import { VALUES_ARRAY_NAME } from './constants';
import { GetDefaultValuesArgsType, GetDefaultValuesReturnType } from './types';

export const getDefaultValues = ({
  state,
  type,
}: GetDefaultValuesArgsType): GetDefaultValuesReturnType => {
  const { selectedCells, ...restData } = state[type];

  const isMemberObject = (
    methodName: string
  ): methodName is keyof typeof restData => methodName in restData;

  /* const isMemberObject = <
    T extends { [Property in keyof T]: T[Property] },
    K extends keyof T
  >(
    object: T,
    key: K
  ): key is Pick<keyof T, string> =>
    Object.keys(object).includes(key as string); */

  return {
    [VALUES_ARRAY_NAME]: (
      (isMemberObject(type) ? restData[type] : []) as
        | FlatType[]
        | HouseType[]
        | ExclusiveType[]
    )
      .map(item => ({ ...item, type }))
      .filter(({ id }) => selectedCells.includes(id)),
  };
};
