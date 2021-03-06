import { GetOptionalType } from 'constants/types';
import { TAB_NAMES } from 'constants/tabs';

export interface onButtonClickArgs {
  title: string;
  type: GetOptionalType<typeof TAB_NAMES>;
  edit: boolean;
}

export interface CreatingPopoverType<T = HTMLButtonElement | null> {
  id: string;
  onClose: () => void;
  anchorEl: T;
  onButtonClick: ({ type }: Pick<onButtonClickArgs, 'type'>) => void;
}
