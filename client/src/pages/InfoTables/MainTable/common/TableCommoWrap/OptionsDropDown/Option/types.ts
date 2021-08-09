import { HeadColumnType } from 'pages/InfoTables/common/Table/types';
import { HideColumnsLogicType } from 'pages/InfoTables/MainTable/Tables/types';
import { getOptionalType } from 'constants/types';
import { TAB_NAMES } from 'constants/tabs';

export interface OptionType extends HideColumnsLogicType {
  title: HeadColumnType['title'];
  value: string;
  pathForHiddenColumnsState: getOptionalType<typeof TAB_NAMES>;
}
