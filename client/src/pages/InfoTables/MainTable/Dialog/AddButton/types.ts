import { FieldArray, FieldArrayMethodProps } from 'react-hook-form';
import { FormInput } from '../types';
import { VALUES_ARRAY_NAME } from '../constants';

export interface AddButtonTypes {
  className: string;
  append: (
    value:
      | Partial<FieldArray<FormInput, typeof VALUES_ARRAY_NAME>>
      | Partial<FieldArray<FormInput, typeof VALUES_ARRAY_NAME>>[],
    options?: FieldArrayMethodProps
  ) => void;
}
