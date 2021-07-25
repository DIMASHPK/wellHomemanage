import { TabProps, TabsProps } from '@material-ui/core';

export interface tabItemType extends TabProps {
  value: number;
  label: string;
  name: string;
}

export interface TabsPanelType extends TabsProps {
  value: number | string;
  tabs: tabItemType[];
  classes?: {
    tabsRoot?: string;
    wrapper?: string;
  } & TabsProps['classes'];
}
