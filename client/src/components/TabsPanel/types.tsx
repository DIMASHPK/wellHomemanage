import React from 'react';

type tabsClasses = {
  root?: string;
  selected?: string;
  disabled?: string;
  wrapper?: string;
  tabsRoot?: string;
};

export interface tabItemType {
  value: number;
  label: string;
  classes?: tabsClasses;
}

export interface TabsPanelType {
  value: number | string;
  // eslint-disable-next-line
  onChange?: (event: React.ChangeEvent<{}>, value: any) => void;
  tabs: tabItemType[];
  textColor?: 'primary' | 'inherit' | 'secondary' | undefined;
  indicatorColor?: 'secondary' | 'primary';
  classes?: tabsClasses & {
    indicator?: string;
  };
}
