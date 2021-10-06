import type { CommonDialogTypes } from 'components/Dialog/types';
import { TAB_NAMES } from 'constants/tabs';
import { getOptionalType } from 'constants/types';
import { RootState } from 'redux/types';
import { SubmitHandler } from 'react-hook-form';
import { FlatType } from 'redux/flats/types';
import { HouseType } from 'redux/houses/types';
import { ExclusiveType } from 'redux/exclusives/types';
import { INITIAL_VALUES_MAPPING } from './constants';

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
}

export type HandleMapType = (item: TableFormType) => TableFormType;

export type UseSubmitFormArrayType<
  O,
  T extends getOptionalType<typeof TAB_NAMES>
> = O & { type: T };

export type TransformFlatsDataType = (
  item: typeof INITIAL_VALUES_MAPPING.flats
) => UseSubmitFormArrayType<Omit<FlatType, 'id'>, typeof TAB_NAMES.FLATS>;

export type TransformHousesDataType = (
  item: typeof INITIAL_VALUES_MAPPING.houses
) => UseSubmitFormArrayType<Omit<HouseType, 'id'>, typeof TAB_NAMES.HOUSES>;

export type TransformExclusivesDataType = (
  item: typeof INITIAL_VALUES_MAPPING.exclusives
) => UseSubmitFormArrayType<
  Omit<ExclusiveType, 'id'>,
  typeof TAB_NAMES.EXCLUSIVES
>;

export type GetFormatedDateType = (data: string) => string | null;

export type GetFormattedDatesArrayType = (
  array: (string | Date)[]
) => string[] | null;
