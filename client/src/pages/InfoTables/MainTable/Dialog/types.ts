import type { CommonDialogTypes } from 'components/Dialog/types';
import { TAB_NAMES } from 'constants/tabs';
import { getOptionalType } from 'constants/types';
import { RootState } from 'redux/types';
import { FlatType } from 'redux/flats/types';
import { HouseType } from 'redux/houses/types';
import { ExclusiveType } from 'redux/exclusive/types';
import { INITIAL_VALUES_MAPPING } from './constants';

interface DialogProps {
  type: getOptionalType<typeof TAB_NAMES>;
}

export interface GetDefaultValuesArgsType {
  type: getOptionalType<typeof TAB_NAMES>;
  state: RootState;
}

export type GetDefaultValuesReturnType = {
  tableForm: ((FlatType | HouseType | ExclusiveType) & {
    type: getOptionalType<typeof TAB_NAMES>;
  })[];
};

export interface DialogType extends CommonDialogTypes, DialogProps {
  edit: boolean;
}

export type TableFormType = getOptionalType<typeof INITIAL_VALUES_MAPPING> &
  DialogProps;

export interface FormInput {
  tableForm: TableFormType[];
}
