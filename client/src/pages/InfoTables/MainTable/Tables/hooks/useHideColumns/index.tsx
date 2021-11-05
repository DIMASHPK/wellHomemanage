import { useCallback, useEffect, useState } from 'react';
import { isEqual } from 'lodash';
import { useAppSelector } from 'redux/hooks';
import { usePrevious } from 'hooks/usePrevios';
import { HandleHideColumnArgsType } from 'pages/InfoTables/MainTable/Tables/types';
import { getHiddenFields } from 'pages/InfoTables/MainTable/Tables/helpers';

export const useHideColumns = () => {
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
      setHiddenColumns(prevState => {
        const entriesOfPrevData = Object.entries(prevState[typeName]);

        if (
          columnName === 'all' &&
          entriesOfPrevData.every(([, value]) => !value)
        ) {
          return {
            ...prevState,
            [typeName]: {
              ...entriesOfPrevData.reduce(
                (acc, [key], index) => ({ ...acc, [key]: !!index }),
                {}
              ),
            },
          };
        }

        if (columnName === 'all') {
          return {
            ...prevState,
            [typeName]: {
              ...entriesOfPrevData.reduce(
                (acc, [key]) => ({ ...acc, [key]: false }),
                {}
              ),
            },
          };
        }

        return {
          ...prevState,
          [typeName]: {
            ...prevState[typeName],
            [columnName]: !prevState[typeName][columnName],
          },
        };
      });
    },
    []
  );

  return {
    handleHideColumn,
    hiddenColumns,
  };
};
