import { Control, UseFieldArrayReturn } from 'react-hook-form';
import { FormInput } from '../types';
import { VALUES_ARRAY_NAME } from '../constants';

export interface FlatFormTypes {
  control: Control<FormInput>;
  name: `${typeof VALUES_ARRAY_NAME}.${number}`;
  remove: UseFieldArrayReturn<FormInput>['remove'];
  index: number;
}
