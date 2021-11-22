import React, { memo } from 'react';
import TabPanel from 'components/TabPanel';
import type { TablesPropsType } from './types';
import FlatTable from './FlatTable';
import HouseTable from './HouseTable';
import { useStyles } from './styles';
import ExclusiveTable from './ExclusiveTable';
import { useHideColumns } from './hooks/useHideColumns';

const Tables: React.FC<TablesPropsType> = memo(props => {
  const { value } = props;

  const { handleHideColumn, hiddenColumns } = useHideColumns();

  const { tabPanelContainer } = useStyles();

  return (
    <div className={tabPanelContainer}>
      <div>
        <TabPanel index={0} value={value.value}>
          <FlatTable
            hiddenColumns={hiddenColumns}
            onHideColumn={handleHideColumn}
            activeTab={value.name}
          />
        </TabPanel>
        <TabPanel index={1} value={value.value}>
          <HouseTable
            hiddenColumns={hiddenColumns}
            onHideColumn={handleHideColumn}
            activeTab={value.name}
          />
        </TabPanel>
        <TabPanel index={2} value={value.value}>
          <ExclusiveTable
            hiddenColumns={hiddenColumns}
            onHideColumn={handleHideColumn}
            activeTab={value.name}
          />
        </TabPanel>
      </div>
    </div>
  );
});

Tables.displayName = 'Tables';

export default Tables;
