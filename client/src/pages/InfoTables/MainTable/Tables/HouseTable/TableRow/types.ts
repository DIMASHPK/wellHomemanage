import type { HouseType } from 'redux/houses/types';
import { TableRowProps } from '@material-ui/core';
import { HideColumnsLogicType } from 'pages/InfoTables/MainTable/Tables/types';
import { GetOptionalType } from 'constants/types';
import { TAB_NAMES } from 'constants/tabs';

export interface TableRowTypes extends TableRowProps {
  tableRow: HouseType;
  hiddenColumns: HideColumnsLogicType['hiddenColumns'];
  pathForHiddenColumnsState: GetOptionalType<typeof TAB_NAMES>;
}

export interface stylesTypes {
  isCheck: boolean;
}
