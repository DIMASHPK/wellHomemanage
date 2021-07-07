import { CheckboxProps } from '@material-ui/core/Checkbox/Checkbox';

export interface CheckboxTypes extends CheckboxProps {
  cellId?: number;
  onChange?: () => void;
  getCheck?: () => boolean;
}
