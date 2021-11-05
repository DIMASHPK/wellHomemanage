import { TabProps, TabsProps } from '@material-ui/core';
import { getOptionalType } from 'constants/types';
import { TAB_NAMES } from 'constants/tabs';
import React from 'react';

export interface tabItemType extends TabProps {
  value: number;
  label: string;
  name: getOptionalType<typeof TAB_NAMES>;
  customTab?: React.ReactNode;
  customTabIcon?: React.ReactNode;
}

export interface TabsPanelType extends TabsProps {
  value: number | string;
  tabs: tabItemType[];
  classes?: {
    tabsRoot?: string;
    wrapper?: string;
  } & TabsProps['classes'];
}
