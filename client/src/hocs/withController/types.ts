import { TextFieldProps } from '@material-ui/core/TextField/TextField';
import { ControllerType } from 'components/Controller/types';
import { TextFieldPropsType } from 'components/fields/Input/types';

export type WithControllerType = ControllerType & Omit<TextFieldProps, 'error'>;

export type ComponentPropsType = TextFieldPropsType;
