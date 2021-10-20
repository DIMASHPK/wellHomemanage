import { useCallback, useEffect } from 'react';
import debounce from 'lodash/debounce';
import { TAB_NAMES } from 'constants/tabs';
import { useDispatch } from 'react-redux';
import { getHouses } from 'redux/houses/thunks';
import { getFlats } from 'redux/flats/thunks';
import { getExclusives } from 'redux/exclusives/thunks';
import { useDebounceSubmitArgs, useDebounceSubmitType } from '../types';

export const useDebounceSubmit = ({
  form,
  selectedTabName,
  onSaveFormState,
}: useDebounceSubmitArgs): void => {
  const { handleSubmit, watch } = form;

  const dispatch = useDispatch();

  const onSubmit: useDebounceSubmitType = useCallback(
    values => {
      const { filters } = values;

      const submitMapping = {
        [TAB_NAMES.FLATS]: () => dispatch(getFlats(filters)),
        [TAB_NAMES.HOUSES]: () => dispatch(getHouses(filters)),
        [TAB_NAMES.EXCLUSIVES]: () => dispatch(getExclusives(filters)),
      };

      onSaveFormState(values);

      if (!filters[0].name) return;

      submitMapping[selectedTabName]();
    },
    [dispatch, onSaveFormState, selectedTabName]
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
