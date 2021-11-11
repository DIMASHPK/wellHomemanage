import { tabItemType } from 'components/Tabs/types';
import { Dispatch, SetStateAction } from 'react';
import { RootState } from 'redux/types';
import { GetOptionalType } from 'constants/types';
import { TAB_NAMES } from 'constants/tabs';
import {getIsCellVisible} from "./helpers";

export interface GetHiddenFieldsTypeReturnType {
  [x: string]: { [x: string]: boolean };
}

export interface TablesPropsType {
  value: tabItemType;
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

export type ReformattedRowDataType<T> = {
  [Property in keyof T]: { keyMap: Property; value: T[Property] };
};

export interface GetIsCellVisibleArgsType {
  keyName?: string;
  hiddenColumns: HideColumnsLogicType['hiddenColumns'];
  pathForHiddenColumnsState: GetOptionalType<typeof TAB_NAMES>;
}
