import { INPUTS_MAPPING } from 'pages/InfoTables/MainTable/Dialog/constants';
import { GetIsDisableType } from './types';

export const getIsDisableAdding: GetIsDisableType = ({
  selectedTabName,
  filters,
}) =>
  !INPUTS_MAPPING[selectedTabName]
    .map(({ name, label }) => ({
      name: label,
      value: name,
    }))
    .filter(
      ({ value: currentValue }) =>
        !filters.map(({ name }) => name).includes(currentValue)
    ).length || !filters[filters.length - 1].name;
