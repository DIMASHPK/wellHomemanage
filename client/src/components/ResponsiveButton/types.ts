import React from 'react';
import { ButtonProps } from '@material-ui/core/Button/Button';

export interface ResponsiveButtonPropsType extends ButtonProps {
  icon?: React.ReactNode;
  classes?: ButtonProps['classes'] & { tipWrapper?: string };
}
