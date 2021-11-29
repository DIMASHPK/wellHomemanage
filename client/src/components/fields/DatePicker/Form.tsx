import WithController from 'hocs/withController';
import { FormInput } from 'pages/InfoTables/MainTable/Dialog/types';
import DatePicker from './index';
import { DatePickerPropsType } from './types';

export default WithController<FormInput, DatePickerPropsType>(DatePicker);
