import { FILTER_COND_ITEMS } from 'pages/InfoTables/MainTable/constants';
import { useCallback, useEffect, useState } from 'react';
import { FiltersType, UseFilterArgsType, UseFilterReturnType } from '../types';
import { INPUT_MAPPINGS_KEYS } from '../constants';

export const useFilters = ({
  selectedTab,
}: UseFilterArgsType): UseFilterReturnType => {
  const [filters, setFilters] = useState<FiltersType>([
    { name: '', value: '', type: INPUT_MAPPINGS_KEYS.INPUT },
  ]);

  useEffect(() => {
    setFilters([{ name: '', value: '', type: INPUT_MAPPINGS_KEYS.INPUT }]);
  }, [selectedTab]);

  const onAddFilter = useCallback(() => {
    setFilters(prevState => [
      ...prevState,
      {
        cond: prevState?.[1]?.cond || FILTER_COND_ITEMS.AND,
        value: '',
        name: '',
        type: INPUT_MAPPINGS_KEYS.INPUT,
      },
    ]);
  }, []);

  const onRemoveFilter = useCallback((index: number) => {
    setFilters(prevState => [...prevState.filter((_, i) => i !== index)]);
  }, []);

  return {
    filters,
    onAddFilter,
    onRemoveFilter,
    setFilters,
  };
};
