import { CheckboxProps } from '@material-ui/core/Checkbox/Checkbox';
import React from 'react';

export interface CheckboxTypes extends CheckboxProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // after fixing hoc can remove
  color?: Exclude<CheckboxProps['color'], 'default'>;
}
