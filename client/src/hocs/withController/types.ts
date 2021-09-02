import { TextFieldPropsType } from 'components/fields/Input/types';
import { SelectPropsType } from 'components/fields/Select/types';
import { ControllerProps, FieldError } from 'react-hook-form';

export type ComponentPropsType = {
  onChange?: (...args: any[]) => void;
  value?: SelectPropsType['value'] | TextFieldPropsType['value'];
  error?: FieldError;
  classes?: SelectPropsType['classes'] | TextFieldPropsType['classes'];
};

export type WithControllerType<
  T extends { [Property in keyof T]: T[Property] }
> = ControllerProps<T> & ComponentPropsType;
