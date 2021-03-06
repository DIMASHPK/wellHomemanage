import { CheckboxTypes } from 'components/fields/Checkbox/types';
import { TableCommonWrapType } from '../types';

export type HeadCheckboxTypes = CheckboxTypes &
  Pick<
    TableCommonWrapType,
    | 'data'
    | 'selectedCells'
    | 'selectedAll'
    | 'handleAllCells'
    | 'handleSelectedAll'
  >;
