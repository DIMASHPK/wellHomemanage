import { TAB_NAMES } from 'constants/tabs';
import { GetOptionalType } from 'constants/types';
import type { HideColumnsLogicType } from '../types';

export type ExclusiveTablePropsType = HideColumnsLogicType & {
  activeTab: GetOptionalType<typeof TAB_NAMES>;
};
