import { TabProps, TabsProps } from '@material-ui/core';
import { getOptionalType } from 'constants/types';
import { TAB_NAMES } from 'constants/tabs';

export interface tabItemType extends TabProps {
  value: number;
  label: string;
  name: getOptionalType<typeof TAB_NAMES>;
}

export interface TabsPanelType extends TabsProps {
  value: number | string;
  tabs: tabItemType[];
  classes?: {
    tabsRoot?: string;
    wrapper?: string;
  } & TabsProps['classes'];
}
