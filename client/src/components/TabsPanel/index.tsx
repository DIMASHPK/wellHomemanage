import React, { memo } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import clsx from 'clsx';
import omit from 'lodash/omit';
import { TabsPanelType } from './types';
import { useStyles } from './styles';

const TabsPanel: React.FC<TabsPanelType> = memo(props => {
  const {
    value,
    onChange,
    tabs,
    textColor = 'primary',
    indicatorColor = 'primary',
    classes = {},
  } = props;

  const { indicator, tabsRoot } = useStyles();

  const renderTabs = () =>
    tabs.map(tab => (
      <Tab
        classes={omit(classes, ['indicator', 'tabsRoot'])}
        key={tab.value}
        {...tab}
      />
    ));

  return (
    <Tabs
      value={value}
      onChange={onChange}
      textColor={textColor}
      indicatorColor={indicatorColor}
      classes={{
        indicator: clsx(indicator, classes?.indicator),
        root: clsx(tabsRoot, classes?.tabsRoot),
      }}
    >
      {renderTabs()}
    </Tabs>
  );
});

TabsPanel.displayName = 'TabsPanel';

export default TabsPanel;
