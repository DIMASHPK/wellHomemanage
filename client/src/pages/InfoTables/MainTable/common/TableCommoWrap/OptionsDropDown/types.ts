import { UsePopoverType } from 'pages/InfoTables/MainTable/common/TableCommoWrap/hooks/types';
import { HeadColumnType } from 'pages/InfoTables/common/Table/types';
import { HideColumnsLogicType } from 'pages/InfoTables/MainTable/Tables/types';
import { getOptionalType } from 'constants/types';
import { TAB_NAMES } from 'constants/tabs';

export interface OptionsDropDownType
  extends Omit<UsePopoverType, 'handleClick' | 'handleClose'>,
    HideColumnsLogicType {
  headColumns: HeadColumnType[];
  onClose: UsePopoverType['handleClose'];
  pathForHiddenColumnsState: getOptionalType<typeof TAB_NAMES>;
  anchorReference?: 'anchorEl' | 'anchorPosition' | 'none';
}
