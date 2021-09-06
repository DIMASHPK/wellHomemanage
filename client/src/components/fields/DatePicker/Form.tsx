import { ParsableDate } from '@material-ui/pickers/constants/prop-types';
import WithController from 'hocs/withController';
import { FormInput } from 'pages/InfoTables/MainTable/Dialog/types';
import DatePicker from './index';

export default WithController<FormInput, ParsableDate>(DatePicker);
