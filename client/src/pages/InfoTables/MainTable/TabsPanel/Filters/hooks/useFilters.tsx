import { useCallback, useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import {
  UseFilterArgsType,
  UseFilterReturnType,
  UseFormValuesType,
} from '../types';
import { VALUES_ARRAY_NAME, FILTER_COND_ITEMS } from '../constants';

export const useFilters = ({
  selectedTab,
}: UseFilterArgsType): UseFilterReturnType => {
  const reactHookFormData = useForm<UseFormValuesType>({
    defaultValues: {
      [VALUES_ARRAY_NAME]: [{ name: '', value: '' }],
    },
  });

  const { control, setValue, watch } = reactHookFormData;

  const { fields, append, remove } = useFieldArray({
    name: VALUES_ARRAY_NAME,
    control,
  });

  const watchFieldArray = watch(VALUES_ARRAY_NAME);

  const filters = fields.map((field, index) => ({
    ...field,
    ...watchFieldArray[index],
  }));

  useEffect(() => {
    setValue(VALUES_ARRAY_NAME, [{ name: '', value: '' }]);
  }, [setValue, selectedTab]);

  const onAddFilter = useCallback(() => {
    append({
      cond: filters?.[1]?.cond || FILTER_COND_ITEMS.AND,
      value: '',
      name: '',
    });
  }, [append, filters]);

  const onRemoveFilter = useCallback(
    (index: number) => {
      remove(index);
    },
    [remove]
  );

  return {
    filters,
    onAddFilter,
    onRemoveFilter,
    control,
    reactHookFormData,
  };
};
