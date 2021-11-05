import React, { memo } from 'react';
import SwipeableViews from 'react-swipeable-views';
import type { TablesPropsType } from './types';
import FlatTable from './FlatTable';
import HouseTable from './HouseTable';
import { useStyles } from './styles';
import ExclusiveTable from './ExclusiveTable';
import { useHideColumns } from './hooks/useHideColumns';

const Tables: React.FC<TablesPropsType> = memo(props => {
  const { value } = props;

  const { handleHideColumn, hiddenColumns } = useHideColumns();

  const { swipeableContainer } = useStyles();

  return (
    <SwipeableViews index={value.value} className={swipeableContainer}>
      <FlatTable
        hiddenColumns={hiddenColumns}
        onHideColumn={handleHideColumn}
        activeTab={value.name}
      />
      <HouseTable
        hiddenColumns={hiddenColumns}
        onHideColumn={handleHideColumn}
        activeTab={value.name}
      />
      <ExclusiveTable
        hiddenColumns={hiddenColumns}
        onHideColumn={handleHideColumn}
        activeTab={value.name}
      />
    </SwipeableViews>
  );
});

Tables.displayName = 'Tables';

export default Tables;
