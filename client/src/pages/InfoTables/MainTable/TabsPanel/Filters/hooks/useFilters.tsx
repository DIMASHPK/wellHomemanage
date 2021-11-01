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

  const prevTabName = usePrevious(selectedTab.name);

  const handleSaveFormState = useCallback(
    ({ filters }: UseFormValuesType) => {
      setSavedState(prevState => ({
        ...prevState,
        [prevTabName]: cloneDeep(filters),
      }));
    },
    [prevTabName]
  );

  const reactHookFormData = useForm<UseFormValuesType>({
    defaultValues: {
      [VALUES_ARRAY_NAME]: defaultFilters,
    },
  });

  const { control, setValue, watch, getValues } = reactHookFormData;

  const { fields, append, remove } = useFieldArray({
    name: VALUES_ARRAY_NAME,
    control,
  });

  const watchFieldArray = watch(VALUES_ARRAY_NAME);

  const filters = fields.map(({ id, ...restField }, index) => ({
    ...restField,
    ...watchFieldArray[index],
  }));

  useEffect(() => {
    if (prevTabName !== selectedTab.name) {
      const currentData = getValues();

      handleSaveFormState(currentData);
      setValue(VALUES_ARRAY_NAME, cloneDeep(savedState[selectedTab.name]));
    }
  }, [
    setValue,
    selectedTab,
    defaultFilters,
    savedState,
    prevTabName,
    getValues,
    handleSaveFormState,
  ]);

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

  const onReset = useCallback(() => {
    setValue(VALUES_ARRAY_NAME, [{ name: '', value: '' }]);
  }, [setValue]);

  useDebounceSubmit({
    form: reactHookFormData,
    selectedTabName: selectedTab.name,
  });

  return {
    filters,
    onAddFilter,
    onRemoveFilter,
    control,
    reactHookFormData,
    onReset,
  };
};
