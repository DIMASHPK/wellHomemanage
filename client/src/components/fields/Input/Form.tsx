import WithController from 'hocs/withController';
import { FormInput } from 'pages/InfoTables/MainTable/Dialog/types';
import { UseFormValuesType } from 'pages/InfoTables/MainTable/TabsPanel/Filters/types';
import { AuthFormValues } from 'Layout/AuthForm/types';
import Input from './index';

export const DialogInput = WithController<FormInput, unknown>(Input);

export const FilterInput = WithController<UseFormValuesType, unknown>(Input);

export const AuthInput = WithController<AuthFormValues, unknown>(Input);
