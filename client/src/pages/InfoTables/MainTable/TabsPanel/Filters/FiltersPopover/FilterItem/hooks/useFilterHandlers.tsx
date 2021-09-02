import React, { useCallback } from 'react';
import { getHiddenFieldsStateType as reduxStoreTableDataArrays } from 'pages/InfoTables/MainTable/Tables/helpers';
import { useAppSelector } from 'redux/hooks';
import { FiltersType } from 'pages/InfoTables/MainTable/TabsPanel/Filters/types';
import {
  UseFilterHandlersArgsType,
  UseFilterHandlersReturnType,
} from '../types';
import { getTypeWithValue as initGetTypeWithValue } from '../helpers';

export const useFilterHandlers = ({
  index,
  setFilters,
  selectedTabName,
}: UseFilterHandlersArgsType): UseFilterHandlersReturnType => {
  const state = useAppSelector(reduxStoreTableDataArrays);

  const getTypeWithValue = initGetTypeWithValue({
    currentTableData: state[selectedTabName],
  });

  const onCondChange = useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) => {
      const { value } = event.target;

      setFilters(prevState => [
        ...prevState.map((item, index) =>
          index > 0
            ? {
                ...item,
                cond: value as FiltersType[number]['cond'],
              }
            : { ...item }
        ),
      ]);
    },
    [setFilters]
  );

  const onNameChange = useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) => {
      const { value: name } = event.target;

      setFilters(prevState => [
        ...prevState.map((item, i) => {
          const { value, type } = getTypeWithValue({
            name: name as FiltersType[number]['name'],
          });

          return {
            ...item,
            name: i === index ? (name as typeof item.name) : item.name,
            value: i === index ? value : item.value,
            type: i === index ? type : item.type,
          };
        }),
      ]);
    },
    [getTypeWithValue, index, setFilters]
  );

  const onValueChange = useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) => {
      const { value } = event.target;

      setFilters(prevState => [
        ...prevState.map((item, i) => ({
          ...item,
          value: i === index ? (value as string) : item.value,
        })),
      ]);
    },
    [index, setFilters]
  );

  const onValueRangeChange = useCallback(
    (dates: Date[]) => {
      setFilters(prevState => [
        ...prevState.map((item, i) => ({
          ...item,
          value: i === index ? (dates as Date[]) : item.value,
        })),
      ]);
    },
    [index, setFilters]
  );

  return {
    onValueChange,
    onNameChange,
    onCondChange,
    onValueRangeChange,
  };
};
