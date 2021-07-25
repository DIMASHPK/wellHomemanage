import type { HouseType } from 'redux/houses/types';
import { TableRowProps } from '@material-ui/core';
import {
  ColumnPathNamesType,
  HideColumnsLogicType,
} from 'pages/InfoTables/MainTable/Tables/types';

export interface TableRowTypes extends TableRowProps {
  tableRow: HouseType;
  hiddenColumns: HideColumnsLogicType['hiddenColumns'];
  pathForHiddenColumnsState:
    | ColumnPathNamesType['FLATS']
    | ColumnPathNamesType['HOUSES'];
}

export interface stylesTypes {
  isCheck: boolean;
}
