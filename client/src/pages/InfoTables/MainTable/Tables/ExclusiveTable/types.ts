import { TAB_NAMES } from 'constants/tabs';
import { getOptionalType } from 'constants/types';
import type { HideColumnsLogicType } from '../types';

export type ExclusiveTablePropsType = HideColumnsLogicType & {
  activeTab: getOptionalType<typeof TAB_NAMES>;
};
