import { Control, UseFieldArrayReturn } from 'react-hook-form';
import { INPUT_FIELDS as HOUSE_INPUT_FIELDS } from 'pages/InfoTables/MainTable/Dialog/HouseForm/constants';
import { INPUT_FIELDS as FLATS_INPUT_FIELDS } from 'pages/InfoTables/MainTable/Dialog/FlatForm/constants';
import { INPUT_FIELDS as EXCLUSIVE_INPUT_FIELDS } from 'pages/InfoTables/MainTable/Dialog/ExclusiveForm/constants';
import { FormInput } from 'pages/InfoTables/MainTable/Dialog/types';
import { VALUES_ARRAY_NAME } from 'pages/InfoTables/MainTable/Dialog/constants';

export interface CommonFormTypes {
  control: Control<FormInput>;
  name: `${typeof VALUES_ARRAY_NAME}.${number}`;
  remove: UseFieldArrayReturn<FormInput>['remove'];
  index: number;
  title: string;
  formInputs:
    | typeof HOUSE_INPUT_FIELDS
    | typeof FLATS_INPUT_FIELDS
    | typeof EXCLUSIVE_INPUT_FIELDS;
}
