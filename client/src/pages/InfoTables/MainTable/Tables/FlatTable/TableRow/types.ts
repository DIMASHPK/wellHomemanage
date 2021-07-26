import type { FlatType } from 'redux/flats/types';
import { TableRowProps } from '@material-ui/core';
import {
  ColumnPathNamesType,
  HideColumnsLogicType,
} from 'pages/InfoTables/MainTable/Tables/types';

export interface TableRowTypes extends TableRowProps {
  tableRow: FlatType;
  hiddenColumns: HideColumnsLogicType['hiddenColumns'];
  pathForHiddenColumnsState:
    | ColumnPathNamesType['FLATS']
    | ColumnPathNamesType['HOUSES']
    | ColumnPathNamesType['EXCLUSIVES'];
}

export interface stylesTypes {
  isCheck: boolean;
}
