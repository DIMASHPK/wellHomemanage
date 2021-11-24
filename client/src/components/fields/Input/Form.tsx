import WithController from 'hocs/withController';
import { FormInput } from 'pages/InfoTables/MainTable/Dialog/types';
import { UseFormValuesType } from 'pages/InfoTables/MainTable/TabsPanel/Filters/types';
import { AuthFormValues } from 'Layout/AuthForm/types';
import Input from './index';
import { TextFieldPropsType } from './types';

export const DialogInput = WithController<FormInput, TextFieldPropsType>(Input);

export const FilterInput = WithController<
  UseFormValuesType,
  TextFieldPropsType
>(Input);

export const AuthInput = WithController<AuthFormValues, TextFieldPropsType>(
  Input
);
