import { useCallback } from 'react';
import { UnionToIntersectionType } from 'constants/types';
import {
  INPUT_FILTERS_MAPPING,
  VALUES_ARRAY_NAME,
} from 'pages/InfoTables/MainTable/TabsPanel/Filters/constants';
import { FilterInput as Input } from 'components/fields/Input/Form';
import { UseInputArgsType, UseInputReturnType } from '../types';

export const useInput = ({
  selectedTabName,
  className,
  index,
  control,
  name,
}: UseInputArgsType): UseInputReturnType => {
  const renderInput = useCallback(() => {
    const commonInputProps = {
      variant: 'outlined',
      className,
      control,
      label: 'Введите значение',
      name: `${VALUES_ARRAY_NAME}.${index}.value`,
    } as const;

    if (name === '' || name === 'id') {
      return <Input {...commonInputProps} />;
    }
    const currentTableData = INPUT_FILTERS_MAPPING[selectedTabName];

    const currentTableDataIntersection =
      currentTableData as UnionToIntersectionType<typeof currentTableData>;

    const {
      component: Component,
      filter,
      ...inputProps
    } = currentTableDataIntersection[name];

    return (
      <Component
        {...commonInputProps}
        {...(inputProps as UnionToIntersectionType<typeof inputProps>)}
        label={inputProps?.label || 'Введите значение'}
        name={`${VALUES_ARRAY_NAME}.${index}.value`}
      />
    );
  }, [className, control, index, name, selectedTabName]);

  return { renderInput };
};
