import { TextFieldPropsType } from 'components/fields/Input/types';
import { SelectPropsType } from 'components/fields/Select/types';
import { ControllerProps, FieldError } from 'react-hook-form';
import { DatePickerProps } from '@material-ui/pickers';

export type ComponentPropsType<T> = {
  onChange?: (...args: any[]) => void;
  value?: T;
  error?: FieldError;
  classes?: SelectPropsType['classes'] | TextFieldPropsType['classes'];
  options?: SelectPropsType['options'];
  className?: SelectPropsType['className'] | TextFieldPropsType['className'];
  label?: SelectPropsType['label'] | TextFieldPropsType['label'];
  disabled?: boolean;
  variant?: DatePickerProps['inputVariant'];
  color?: TextFieldPropsType['color'];
};

export type WithControllerType<
  T extends { [Property in keyof T]: T[Property] },
  V
> = ControllerProps<T> & ComponentPropsType<V>;
