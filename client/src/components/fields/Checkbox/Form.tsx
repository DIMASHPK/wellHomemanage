import WithController from 'hocs/withController';
import { AuthFormValues } from 'Layout/AuthForm/types';
import Checkbox from './index';
import { CheckboxTypes } from './types';

export const AuthCheckbox = WithController<AuthFormValues, CheckboxTypes>(
  Checkbox
);
