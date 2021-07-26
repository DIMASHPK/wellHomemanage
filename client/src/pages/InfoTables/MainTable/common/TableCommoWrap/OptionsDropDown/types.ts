import { UsePopoverType } from 'pages/InfoTables/MainTable/common/TableCommoWrap/hooks/types';
import { HeadColumnType } from 'pages/InfoTables/common/Table/types';
import {
  ColumnPathNamesType,
  HideColumnsLogicType,
} from 'pages/InfoTables/MainTable/Tables/types';

export interface OptionsDropDownType
  extends Omit<UsePopoverType, 'handleClick' | 'handleClose'>,
    HideColumnsLogicType {
  headColumns: HeadColumnType[];
  onClose: UsePopoverType['handleClose'];
  pathForHiddenColumnsState:
    | ColumnPathNamesType['FLATS']
    | ColumnPathNamesType['HOUSES']
    | ColumnPathNamesType['EXCLUSIVES'];
  anchorReference?: 'anchorEl' | 'anchorPosition' | 'none';
}
