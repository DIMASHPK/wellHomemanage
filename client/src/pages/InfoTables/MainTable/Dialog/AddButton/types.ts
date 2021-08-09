import { UseFieldArrayReturn } from 'react-hook-form';
import { FormInput } from '../types';

export interface AddButtonTypes {
  className: string;
  append: UseFieldArrayReturn<FormInput>['append'];
}
