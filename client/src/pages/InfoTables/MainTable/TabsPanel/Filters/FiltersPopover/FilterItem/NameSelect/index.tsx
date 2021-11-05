import React, { memo, useCallback, useMemo } from 'react';
import Select from 'components/fields/Select';
import { VALUES_ARRAY_NAME } from 'pages/InfoTables/MainTable/TabsPanel/Filters/constants';
import { useFormContext } from 'react-hook-form';
import { NameSelectPropsType } from './types';
import { useStyles } from './styles';
import { getValueForInput, getNameOptions } from './helpers';

const NameSelect: React.FC<NameSelectPropsType> = memo(props => {
  const { currentFilter, index, filters, selectedTabName } = props;

  const { setValue } = useFormContext();

  const { name, cond } = currentFilter;

  const { nameSelect, select, labelRoot, option } = useStyles();

  const nameOptions = useMemo(
    () =>
      getNameOptions({ selectedTabName, name, filters }).map(item => ({
        ...item,
        className: option,
      })),
    [filters, name, selectedTabName]
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) => {
      const { value } = event.target;

      setValue(`${VALUES_ARRAY_NAME}.${index}`, {
        ...(index ? { cond } : {}),
        name: value,
        value: getValueForInput({
          name: value as NameSelectPropsType['currentFilter']['name'],
          selectedTabName,
        }),
      });
    },
    [cond, index, selectedTabName, setValue]
  );

  return (
    <Select
      options={nameOptions}
      className={nameSelect}
      label="Выбирите имя фильтра"
      value={name}
      classes={{ select }}
      labelClasses={{ root: labelRoot }}
      name={`${VALUES_ARRAY_NAME}.${index}.name`}
      onChange={handleChange}
    />
  );
});

NameSelect.displayName = 'NameSelect';

export default NameSelect;
