import { onButtonClickArgs } from 'components/CreatingPopover/types';

export interface AddButtonType {
  onDialogData: ({ title, type }: onButtonClickArgs) => void;
}
