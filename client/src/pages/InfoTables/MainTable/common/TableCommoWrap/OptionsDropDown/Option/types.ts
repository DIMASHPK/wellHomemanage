import { HeadColumnType } from 'pages/InfoTables/common/Table/types';
import { HideColumnsLogicType } from 'pages/InfoTables/MainTable/Tables/types';
import { GetOptionalType } from 'constants/types';
import { TAB_NAMES } from 'constants/tabs';

export interface OptionType extends HideColumnsLogicType {
  title: HeadColumnType['title'];
  value: string;
  pathForHiddenColumnsState: GetOptionalType<typeof TAB_NAMES>;
}
