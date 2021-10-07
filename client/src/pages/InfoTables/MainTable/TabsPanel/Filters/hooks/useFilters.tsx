import { useCallback, useEffect, useMemo, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { cloneDeep } from 'lodash';
import { TAB_NAMES } from 'constants/tabs';
import { usePrevious } from 'hooks/usePrevios';
import {
  UseFilterArgsType,
  UseFilterReturnType,
  UseFormValuesType,
} from '../types';
import { VALUES_ARRAY_NAME, FILTER_COND_ITEMS } from '../constants';
import { useDebounceSubmit } from './useDebounceSubmit';

export const useFilters = ({
  selectedTab,
}: UseFilterArgsType): UseFilterReturnType => {
  const [savedState, setSavedState] = useState<
    Record<typeof selectedTab.name, UseFormValuesType['filters']>
  >({
    [TAB_NAMES.FLATS]: [{ name: '', value: '' }],
    [TAB_NAMES.HOUSES]: [{ name: '', value: '' }],
    [TAB_NAMES.EXCLUSIVES]: [{ name: '', value: '' }],
  });

  const defaultFilters = useMemo(
    () => [
      ...(cloneDeep(savedState[selectedTab.name]) || [{ name: '', value: '' }]),
    ],
    [savedState, selectedTab.name]
  );

  const handleSaveFormState = useCallback(
    ({ filters }: UseFormValuesType) => {
      setSavedState(prevState => ({
        ...prevState,
        [selectedTab.name]: cloneDeep(filters),
      }));
    },
    [selectedTab]
  );

  const reactHookFormData = useForm<UseFormValuesType>({
    defaultValues: {
      [VALUES_ARRAY_NAME]: defaultFilters,
    },
  });

  const { control, setValue, watch } = reactHookFormData;

  const { fields, append, remove } = useFieldArray({
    name: VALUES_ARRAY_NAME,
    control,
  });

  const watchFieldArray = watch(VALUES_ARRAY_NAME);

  const filters = fields.map(({ id, ...restField }, index) => ({
    ...restField,
    ...watchFieldArray[index],
  }));

  const prevTabName = usePrevious(selectedTab.name);

  useEffect(() => {
    if (prevTabName !== selectedTab.name) {
      setValue(VALUES_ARRAY_NAME, cloneDeep(savedState[selectedTab.name]));
    }
  }, [setValue, selectedTab, defaultFilters, savedState, prevTabName]);

  const onAddFilter = useCallback(() => {
    append({
      cond: filters?.[1]?.cond || FILTER_COND_ITEMS.AND,
      value: '',
      name: '',
    });
  }, [append, filters]);

  const onRemoveFilter = useCallback(
    (index: number) => {
      if (!index) {
        return setValue(`${VALUES_ARRAY_NAME}.${index}`, {
          name: '',
          value: '',
        });
      }

      remove(index);
    },
    [remove, setValue]
  );

  useDebounceSubmit({
    form: reactHookFormData,
    selectedTabName: selectedTab.name,
    onSaveFormState: handleSaveFormState,
  });

  return {
    filters,
    onAddFilter,
    onRemoveFilter,
    control,
    reactHookFormData,
  };
};
