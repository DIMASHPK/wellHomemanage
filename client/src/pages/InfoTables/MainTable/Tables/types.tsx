import { Dispatch, SetStateAction } from 'react';
import { RootState } from 'redux/types';

export interface GetHiddenFieldsTypeReturnType {
  [x: string]: { [x: string]: boolean };
}

export interface TablesPropsType {
  value: number;
}

export interface HiddenColumnsStateType {
  hiddenColumns: GetHiddenFieldsTypeReturnType;
  setHiddenColumns: Dispatch<SetStateAction<GetHiddenFieldsTypeReturnType>>;
}

export interface HandleHideColumnArgsType {
  typeName: string;
  columnName: string;
}

export interface HideColumnsLogicType {
  hiddenColumns: HiddenColumnsStateType['hiddenColumns'];
  onHideColumn: (data: HandleHideColumnArgsType) => void;
}

export const getHiddenFieldsStateType = ({
  flats: { flats },
  houses: { houses },
  exclusives: { exclusives },
}: RootState) => ({ flats, houses, exclusives });

export type GetHiddenFieldsType = (
  state: ReturnType<typeof getHiddenFieldsStateType>,
  prevState?: GetHiddenFieldsTypeReturnType
) => GetHiddenFieldsTypeReturnType;
