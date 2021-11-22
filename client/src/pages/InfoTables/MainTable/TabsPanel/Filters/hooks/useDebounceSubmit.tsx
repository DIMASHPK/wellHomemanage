import { useCallback, useEffect } from 'react';
import debounce from 'lodash/debounce';
import { TAB_NAMES } from 'constants/tabs';
import { useDispatch } from 'react-redux';
import { getHouses } from 'redux/houses/thunks';
import { getFlats } from 'redux/flats/thunks';
import { getExclusives } from 'redux/exclusives/thunks';
import { handlePageChange as handleHousePageChange } from 'redux/houses/reducer';
import { handlePageChange as handleFlatPageChange } from 'redux/flats/reducer';
import { handlePageChange as handleExclusivePageChange } from 'redux/exclusives/reducer';
import { useDebounceSubmitArgs, useDebounceSubmitType } from '../types';
import { useSavedFilters } from './useSavedFilters';

export const useDebounceSubmit = ({
  form,
  selectedTabName,
}: useDebounceSubmitArgs): void => {
  const { handleSubmit, watch } = form;

  const { handleSaveFilters } = useSavedFilters({
    selectedTabName,
  });

  const dispatch = useDispatch();

  const onSubmit: useDebounceSubmitType = useCallback(
    values => {
      const { filters } = values;

      const submitMapping = {
        [TAB_NAMES.FLATS]: () => {
          dispatch(handleFlatPageChange(0));
          dispatch(getFlats());
        },
        [TAB_NAMES.HOUSES]: () => {
          dispatch(handleHousePageChange(0));
          dispatch(getHouses());
        },
        [TAB_NAMES.EXCLUSIVES]: () => {
          dispatch(handleExclusivePageChange(0));
          dispatch(getExclusives());
        },
      };

      handleSaveFilters({ filters, tabName: selectedTabName });
      submitMapping[selectedTabName]();
    },
    [dispatch, handleSaveFilters, selectedTabName]
  );

  const debouncedSubmit = useCallback(debounce(handleSubmit(onSubmit), 500), [
    handleSubmit,
    onSubmit,
  ]);

  useEffect(() => {
    const subscription = watch(() => debouncedSubmit());

    return () => {
      debouncedSubmit.cancel();
      subscription.unsubscribe();
    };
  }, [debouncedSubmit, watch]);
};
