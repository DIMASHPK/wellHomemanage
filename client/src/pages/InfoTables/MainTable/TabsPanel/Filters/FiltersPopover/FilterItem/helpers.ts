import { INPUTS_MAPPING } from 'pages/InfoTables/MainTable/Dialog/constants';
import Input from 'components/fields/Input';
import moment from 'moment/moment';
import { FlatType } from 'redux/flats/types';
import { HouseType } from 'redux/houses/types';
import { ExclusiveType } from 'redux/exclusive/types';
import {
  GetNameOptionsType,
  GetInputComponentType,
  GetTypeWithValueType,
} from './types';
import { INPUT_MAPPINGS_KEYS } from '../../constants';

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

export const getInputComponent = ({
  selectedTabName,
  name,
}: GetInputComponentType) =>
  INPUTS_MAPPING[selectedTabName]
    .map(({ name, component }) => ({ name, component }))
    .find(({ name: currentName }) => currentName === name)?.component || Input;

export const getTypeWithValue: GetTypeWithValueType =
  ({ currentTableData }) =>
  ({ name }) => {
    const matchingValue = name
      ? currentTableData[0][
          name as keyof (FlatType | HouseType | ExclusiveType)
        ]
      : '';

    console.log(matchingValue);

    if (typeof matchingValue === 'number' || !moment(matchingValue).isValid()) {
      return { type: INPUT_MAPPINGS_KEYS.INPUT, value: '' };
    }

    return { type: INPUT_MAPPINGS_KEYS.DATE, value: [] };
  };
