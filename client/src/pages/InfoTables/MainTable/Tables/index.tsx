import React, { memo } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { TablesPropsType } from './types';
import FlatTable from './FlatTable';

const Tables: React.FC<TablesPropsType> = memo(props => {
  const { value = 0 } = props;

  return (
    <SwipeableViews index={value}>
      <FlatTable />
    </SwipeableViews>
  );
});

Tables.displayName = 'Tables';

export default Tables;
