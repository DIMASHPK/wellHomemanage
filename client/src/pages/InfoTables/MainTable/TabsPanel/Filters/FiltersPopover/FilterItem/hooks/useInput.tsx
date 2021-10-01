import { useCallback, useMemo } from 'react';
import { FilterInput as Input } from 'components/fields/Input/Form';
import { INPUT_FILTERS_MAPPING, VALUES_ARRAY_NAME } from '../../../constants';
import { UseInputArgsType, UseInputReturnType } from '../types';

export const useInput = ({
  selectedTabName,
  className,
  index,
  control,
  name,
}: UseInputArgsType): UseInputReturnType => {
  const currentTableData = INPUT_FILTERS_MAPPING[selectedTabName];

  const predicateFunc = useCallback(
    (name: UseInputArgsType['name']): name is keyof typeof currentTableData =>
      !!INPUT_FILTERS_MAPPING[selectedTabName],
    [currentTableData, selectedTabName]
  );

  const matchData = useMemo(
    () =>
      ({
        ...(predicateFunc(name) ? currentTableData[name] : {}),
        variant: 'outlined',
        className,
        control,
      } as const),
    [className, control, currentTableData, name, predicateFunc]
  );

  const renderInput = useCallback(() => {
    const { component: Component, ...inputProps } = matchData;

    const CurrentInput = Component || Input;

    return (
      <CurrentInput
        {...inputProps}
        label={inputProps?.label || 'Введите значение'}
        name={`${VALUES_ARRAY_NAME}.${index}.value`}
      />
    );
  }, [index, matchData]);

  return { renderInput };
};
