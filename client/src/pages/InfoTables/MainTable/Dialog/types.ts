import type { CommonDialogTypes } from 'components/Dialog/types';
import { TAB_NAMES } from 'constants/tabs';
import { getOptionalType } from 'constants/types';
import { INITIAL_VALUES_MAPPING } from './constants';

interface DialogProps {
  type: getOptionalType<typeof TAB_NAMES>;
}

export interface DialogType extends CommonDialogTypes, DialogProps {}

export type TableFormType = getOptionalType<typeof INITIAL_VALUES_MAPPING> &
  DialogProps;

export interface FormInput {
  tableForm: TableFormType[];
}
