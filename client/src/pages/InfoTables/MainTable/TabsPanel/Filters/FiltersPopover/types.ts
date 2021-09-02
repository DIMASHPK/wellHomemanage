import { FiltersPropsType } from '../types';

export interface FiltersPopoverPropsType extends FiltersPropsType {
  anchorEl: HTMLButtonElement | null;
  onClose: () => void;
}

export type GetIsDisableAddingType = Pick<
  FiltersPopoverPropsType,
  'filters' | 'selectedTabName'
>;

export type GetIsDisableType = (data: GetIsDisableAddingType) => boolean;
