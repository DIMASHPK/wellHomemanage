import { Control, UseFieldArrayReturn } from 'react-hook-form';
import { FormInput } from 'pages/InfoTables/MainTable/Dialog/types';
import {
  INPUTS_MAPPING,
  VALUES_ARRAY_NAME,
} from 'pages/InfoTables/MainTable/Dialog/constants';
import { GetOptionalType } from 'constants/types';

export interface CommonFormTypes {
  control: Control<FormInput>;
  name: `${typeof VALUES_ARRAY_NAME}.${number}`;
  remove: UseFieldArrayReturn<FormInput>['remove'];
  index: number;
  title: string;
  formInputs: GetOptionalType<typeof INPUTS_MAPPING>;
}
