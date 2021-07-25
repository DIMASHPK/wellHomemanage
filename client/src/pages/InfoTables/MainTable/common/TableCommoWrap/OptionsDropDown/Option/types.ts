import { HeadColumnType } from 'pages/InfoTables/common/Table/types';
import {
  ColumnPathNamesType,
  HideColumnsLogicType,
} from 'pages/InfoTables/MainTable/Tables/types';

export interface OptionType extends HideColumnsLogicType {
  title: HeadColumnType['title'];
  value: string;
  pathForHiddenColumnsState:
    | ColumnPathNamesType['FLATS']
    | ColumnPathNamesType['HOUSES'];
}
