import React, { memo, useCallback, useEffect, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useAppSelector } from 'redux/hooks';
import { usePrevious } from 'hooks/usePrevios';
import { isEqual } from 'lodash';
import type { HandleHideColumnArgsType, TablesPropsType } from './types';
import FlatTable from './FlatTable';
import HouseTable from './HouseTable';
import { useStyles } from './styles';
import { getHiddenFields } from './helpers';
import ExclusiveTable from './ExclusiveTable';

const Tables: React.FC<TablesPropsType> = memo(props => {
  const { value = 0 } = props;

  const state = useAppSelector(
    ({ flats: { flats }, houses: { houses }, exclusives: { exclusives } }) => ({
      flats,
      houses,
      exclusives,
    })
  );

  const [hiddenColumns, setHiddenColumns] = useState(getHiddenFields(state));

  const prevState = usePrevious(state);

  useEffect(() => {
    if (!isEqual(prevState, state)) {
      setHiddenColumns(prevState => getHiddenFields(state, prevState));
    }
  }, [prevState, state]);

  const handleHideColumn = useCallback(
    ({ typeName, columnName }: HandleHideColumnArgsType) => {
      setHiddenColumns(prevState =>
        columnName === 'all'
          ? {
              ...prevState,
              [typeName]: {
                ...Object.entries(prevState[typeName])
                  .map(([key]) => ({
                    [key]: false,
                  }))
                  .reduce((acc, item) => ({ ...acc, ...item }), {}),
              },
            }
          : {
              ...prevState,
              [typeName]: {
                ...prevState[typeName],
                [columnName]: !prevState[typeName][columnName],
              },
            }
      );
    },
    []
  );

  const { swipeableContainer } = useStyles();

  return (
    <SwipeableViews index={value} className={swipeableContainer}>
      <FlatTable
        hiddenColumns={hiddenColumns}
        onHideColumn={handleHideColumn}
      />
      <HouseTable
        hiddenColumns={hiddenColumns}
        onHideColumn={handleHideColumn}
      />
      <ExclusiveTable
        hiddenColumns={hiddenColumns}
        onHideColumn={handleHideColumn}
      />
    </SwipeableViews>
  );
});

Tables.displayName = 'Tables';

export default Tables;
