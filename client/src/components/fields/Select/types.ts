import {
  InputLabelProps,
  FormControlProps,
  SelectProps,
} from '@material-ui/core';
import { MenuItemProps } from '@material-ui/core/MenuItem/MenuItem';
import { FieldError } from 'react-hook-form';
import { SelectInputProps } from '@material-ui/core/Select/SelectInput';

export type SelectTypeWithoutOmit = FormControlProps &
  InputLabelProps &
  SelectProps;

export type OptionType = Omit<MenuItemProps, 'button'> & {
  button?: true;
  name: string;
};

export type SelectPropsType = Omit<
  SelectTypeWithoutOmit,
  'error' | 'onChange'
> & {
  error?: FieldError;
  options?: OptionType[];
  onChange?: SelectInputProps['onChange'];
  labelClasses?: InputLabelProps['classes'];
};
