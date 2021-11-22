import WithController from 'hocs/withController';
import { AuthFormValues } from 'Layout/AuthForm/types';
import Checkbox from './index';

export const AuthCheckbox = WithController<AuthFormValues, unknown>(Checkbox);
