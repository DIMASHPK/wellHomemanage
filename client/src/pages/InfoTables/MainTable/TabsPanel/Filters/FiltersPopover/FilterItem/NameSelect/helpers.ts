import { INPUT_FILTERS_MAPPING } from 'pages/InfoTables/MainTable/TabsPanel/Filters/constants';
import { INPUTS_MAPPING } from 'pages/InfoTables/MainTable/Dialog/constants';
import { GetValueForInput, GetNameOptionsType } from './types';

export const getValueForInput: GetValueForInput = ({
  selectedTabName,
  name,
}) => {
  const currentTableData = INPUT_FILTERS_MAPPING[selectedTabName];

  return name
    ? currentTableData[name as keyof typeof currentTableData]?.value
    : '';
};

export const getNameOptions: GetNameOptionsType = ({
  selectedTabName,
  name,
  filters,
}) => [
  { name: 'Ничего', value: '' },
  ...INPUTS_MAPPING[selectedTabName]
    .map(({ name, label }) => ({
      name: label,
      value: name,
    }))
    .filter(
      ({ value: currentValue }) =>
        !filters.map(({ name }) => name).includes(currentValue) ||
        currentValue === name
    ),
];
