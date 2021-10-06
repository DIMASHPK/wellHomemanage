import type { ExclusiveType } from 'redux/exclusives/types';
import { TableRowProps } from '@material-ui/core';
import { HideColumnsLogicType } from 'pages/InfoTables/MainTable/Tables/types';
import { TAB_NAMES } from 'constants/tabs';
import { getOptionalType } from 'constants/types';

export interface TableRowTypes extends TableRowProps {
  tableRow: ExclusiveType;
  hiddenColumns: HideColumnsLogicType['hiddenColumns'];
  pathForHiddenColumnsState: getOptionalType<typeof TAB_NAMES>;
}

export interface stylesTypes {
  isCheck: boolean;
}
