import { getOptionalType } from 'constants/types';
import { TAB_NAMES } from 'constants/tabs';

export interface RemoveConfirmType {
  open: boolean;
  onClose: () => void;
  selectedTabName: getOptionalType<typeof TAB_NAMES>;
}

export type UseRemoveArgsType = Omit<RemoveConfirmType, 'open'>;

export interface UseRemoveReturnType {
  disabled: boolean;
  handleRemove: () => Promise<void>;
}
