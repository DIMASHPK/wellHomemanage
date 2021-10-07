import type { CommonDialogTypes } from 'components/Dialog/types';
import { TAB_NAMES } from 'constants/tabs';
import { getOptionalType } from 'constants/types';
import { RootState } from 'redux/types';
import { SubmitHandler } from 'react-hook-form';
import { FlatType } from 'redux/flats/types';
import { HouseType } from 'redux/houses/types';
import { ExclusiveType } from 'redux/exclusives/types';
import { INITIAL_VALUES_MAPPING, SUBMIT_KEYS } from './constants';

interface DialogProps {
  type: getOptionalType<typeof TAB_NAMES>;
}

export interface GetDefaultValuesArgsType {
  type: getOptionalType<typeof TAB_NAMES>;
  state: RootState;
}

export type TableFormType = getOptionalType<typeof INITIAL_VALUES_MAPPING>;

export interface FormInput {
  tableForm: TableFormType[];
}

export type GetDefaultValuesReturnType = FormInput;

export interface DialogType extends CommonDialogTypes, DialogProps {
  edit: boolean;
}

export interface UseSubmitReturnType {
  handleSubmit: SubmitHandler<FormInput>;
}

export interface UseSubmitArgsType {
  onClose: () => void;
  edit: boolean;
  type: getOptionalType<typeof TAB_NAMES>;
}

export type HandleMapType = (item: TableFormType) => TableFormType;

export type TransformFlatsDataType = (
  item: typeof INITIAL_VALUES_MAPPING.flats
) => Omit<FlatType, 'id'>;

export type TransformHousesDataType = (
  item: typeof INITIAL_VALUES_MAPPING.houses
) => Omit<HouseType, 'id'>;

export type TransformExclusivesDataType = (
  item: typeof INITIAL_VALUES_MAPPING.exclusives
) => Omit<ExclusiveType, 'id'>;

export type GetFormatedDateType = (data: string) => string | null;

export type GetFormattedDatesArrayType = (
  array: (string | Date)[]
) => string[] | null;

export type GetSubmitKeyType = (
  edit: boolean
) => getOptionalType<typeof SUBMIT_KEYS>;

export type HandleCreateType = (data: {
  flats: ReturnType<TransformFlatsDataType>[];
  houses: ReturnType<TransformHousesDataType>[];
  exclusives: ReturnType<TransformExclusivesDataType>[];
}) => void;
