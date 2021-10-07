import { useCallback, useEffect } from 'react';
import debounce from 'lodash/debounce';
import { TAB_NAMES } from 'constants/tabs';
import { useDispatch } from 'react-redux';
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
        [TAB_NAMES.FLATS]: () => null,
        [TAB_NAMES.HOUSES]: () => null,
        [TAB_NAMES.EXCLUSIVES]: () => null,
      };

      onSaveFormState(values);

      if (!filters[0].name) return;

      console.log(filters);
    },
    [onSaveFormState]
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
