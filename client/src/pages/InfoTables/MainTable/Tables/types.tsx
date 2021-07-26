import { Dispatch, SetStateAction } from 'react';
import { getHiddenFieldsReturnType } from './helpers';

export interface TablesPropsType {
  value: number;
}

export interface HiddenColumnsStateType {
  hiddenColumns: getHiddenFieldsReturnType;
  setHiddenColumns: Dispatch<SetStateAction<getHiddenFieldsReturnType>>;
}

export interface HandleHideColumnArgsType {
  typeName: string;
  columnName: string;
}

export interface HideColumnsLogicType {
  hiddenColumns: HiddenColumnsStateType['hiddenColumns'];
  onHideColumn: (data: HandleHideColumnArgsType) => void;
}

export interface ColumnPathNamesType {
  FLATS: 'flats';
  HOUSES: 'houses';
  EXCLUSIVES: 'exclusives';
}
