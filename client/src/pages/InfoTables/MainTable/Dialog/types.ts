import type { CommonDialogTypes } from 'components/Dialog/types';
import { TAB_NAMES } from 'constants/tabs';
import { getOptionalType } from 'constants/types';
import { RootState } from 'redux/types';
import { SubmitHandler } from 'react-hook-form';
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

export type UseSubmitFormArrayType<
  O,
  T extends getOptionalType<typeof TAB_NAMES>
> = O & { type: T };
