import Box from '@material-ui/core/Box';
import React, { memo } from 'react';
import { TabPanelProps } from './types';
import { useStyles } from './styles';

const TabPanel: React.FC<TabPanelProps> = memo(props => {
  const { children, value, index, ...other } = props;

  const { tabPanelBox, tabPanel } = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className={tabPanel}
    >
      {value === index && <Box className={tabPanelBox}>{children}</Box>}
    </div>
  );
});

TabPanel.displayName = 'TabPanel';

export default TabPanel;
