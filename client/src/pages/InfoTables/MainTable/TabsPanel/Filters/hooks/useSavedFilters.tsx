import { useAppSelector } from 'redux/hooks';
import { useDispatch } from 'react-redux';
import { useCallback, useMemo } from 'react';
import { TAB_NAMES } from 'constants/tabs';
import { handleSaveFilters as handleSaveHouseFilters } from 'redux/houses/reducer';
import { handleSaveFilters as handleSaveFlatFilters } from 'redux/flats/reducer';
import { handleSaveFilters as handleSaveExclusiveFilters } from 'redux/exclusives/reducer';
import { cloneDeep } from 'lodash';
import { HandleSaveStateArgsType, UseSavedFiltersArgsType } from '../types';

export const useSavedFilters = ({
  selectedTabName,
}: UseSavedFiltersArgsType) => {
  const savedFilters = useAppSelector(state => state[selectedTabName].filters);

  const currentFilters = useMemo(
    () => cloneDeep(savedFilters || [{ name: '', value: '' }]),
    [savedFilters]
  );

  const dispatch = useDispatch();

  const handleSaveFilters = useCallback(
    ({ filters, tabName }: HandleSaveStateArgsType) => {
      const actionsMapping = {
        [TAB_NAMES.FLATS]: () => dispatch(handleSaveFlatFilters(filters)),
        [TAB_NAMES.HOUSES]: () => dispatch(handleSaveHouseFilters(filters)),
        [TAB_NAMES.EXCLUSIVES]: () =>
          dispatch(handleSaveExclusiveFilters(filters)),
      };

      actionsMapping[tabName]?.();
    },
    [dispatch]
  );

  return { handleSaveFilters, currentFilters };
};
