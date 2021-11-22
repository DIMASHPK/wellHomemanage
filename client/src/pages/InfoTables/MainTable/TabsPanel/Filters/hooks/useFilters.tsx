import { useCallback, useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { cloneDeep } from 'lodash';
import { usePrevious } from 'hooks/usePrevios';
import { UseFilterArgsType, UseFormValuesType } from '../types';
import { VALUES_ARRAY_NAME, FILTER_COND_ITEMS } from '../constants';
import { useDebounceSubmit } from './useDebounceSubmit';
import { useSavedFilters } from './useSavedFilters';

export const useFilters = ({ selectedTab }: UseFilterArgsType) => {
  const { currentFilters, handleSaveFilters } = useSavedFilters({
    selectedTabName: selectedTab.name,
  });

  const prevTabName = usePrevious(selectedTab.name);

  const reactHookFormData = useForm<UseFormValuesType>({
    defaultValues: {
      [VALUES_ARRAY_NAME]: currentFilters,
    },
  });

  const { control, setValue, watch, getValues } = reactHookFormData;

  const { fields, append, remove } = useFieldArray({
    name: VALUES_ARRAY_NAME,
    control,
  });

  const filters = watch(VALUES_ARRAY_NAME);

  useEffect(() => {
    if (prevTabName !== selectedTab.name) {
      const currentData = getValues();

      handleSaveFilters({ filters: currentData.filters, tabName: prevTabName });
      setValue(VALUES_ARRAY_NAME, cloneDeep(currentFilters));
    }
  }, [
    setValue,
    selectedTab,
    prevTabName,
    getValues,
    handleSaveFilters,
    currentFilters,
  ]);

  const onAddFilter = useCallback(() => {
    append({
      cond: filters?.[1]?.cond || FILTER_COND_ITEMS.AND,
      value: '',
      name: '',
    });
  }, [append, filters]);

  const onReset = useCallback(() => {
    setValue(VALUES_ARRAY_NAME, [{ name: '', value: '' }]);
  }, [setValue]);

  const onRemoveFilter = useCallback(
    (index: number) => {
      if (!index && filters.length === 1) {
        return onReset();
      }

      if (!index && filters.length > 1) {
        delete filters[1].cond;

        setValue(VALUES_ARRAY_NAME, [...filters]);
      }

      remove(index);
    },
    [filters, onReset, remove, setValue]
  );

  useDebounceSubmit({
    form: reactHookFormData,
    selectedTabName: selectedTab.name,
  });

  return {
    fields,
    filters,
    onAddFilter,
    onRemoveFilter,
    control,
    reactHookFormData,
    onReset,
  };
};
