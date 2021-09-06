import WithController from 'hocs/withController';
import { FormInput } from 'pages/InfoTables/MainTable/Dialog/types';
import { UseFormValuesType } from 'pages/InfoTables/MainTable/TabsPanel/Filters/types';
import Input from './index';

export const DialogInput = WithController<FormInput, unknown>(Input);

export const FilterInput = WithController<UseFormValuesType, unknown>(Input);
