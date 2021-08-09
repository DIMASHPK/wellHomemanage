import { TextFieldProps } from '@material-ui/core/TextField/TextField';
import { FieldError } from 'react-hook-form';

export type TextFieldPropsType = Omit<TextFieldProps, 'error'> & {
  error?: FieldError;
};
