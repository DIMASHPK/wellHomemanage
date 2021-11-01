import { getOptionalType } from 'constants/types';
import { TAB_NAMES } from 'constants/tabs';
import type { HideColumnsLogicType } from '../types';

export type HouseTablePropsType = HideColumnsLogicType & {
  activeTab: getOptionalType<typeof TAB_NAMES>;
};
