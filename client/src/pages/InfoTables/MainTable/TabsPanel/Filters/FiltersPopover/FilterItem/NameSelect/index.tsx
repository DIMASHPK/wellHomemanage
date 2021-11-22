import React, { memo, useCallback, useMemo } from 'react';
import Select from 'components/fields/Select';
import { VALUES_ARRAY_NAME } from 'pages/InfoTables/MainTable/TabsPanel/Filters/constants';
import { useFormContext } from 'react-hook-form';
import { SelectPropsType } from 'components/fields/Select/types';
import { NameSelectPropsType } from './types';
import { useStyles } from './styles';
import { getValueForInput, getNameOptions } from './helpers';

const NameSelect: React.FC<NameSelectPropsType> = memo(
  React.forwardRef((props, ref: SelectPropsType['ref']) => {
    const { currentFilter, index, filters, selectedTabName } = props;

    const { setValue, register } = useFormContext();

    const { name, cond } = currentFilter;

    const { nameSelect, select, labelRoot, option } = useStyles();

    const nameOptions = useMemo(
      () =>
        getNameOptions({ selectedTabName, name, filters }).map(item => ({
          ...item,
          className: option,
        })),
      [filters, name, option, selectedTabName]
    );

    const handleChange = useCallback(
      (event: React.ChangeEvent<{ value: unknown }>) => {
        const value = event.target
          .value as NameSelectPropsType['currentFilter']['name'];

        filters[index] = {
          ...(index ? { cond } : {}),
          name: value,
          value: getValueForInput({
            name: value,
            selectedTabName,
          }),
        };

        setValue(`${VALUES_ARRAY_NAME}`, [...filters]);
      },
      [cond, filters, index, selectedTabName, setValue]
    );

    return (
      <Select
        options={nameOptions}
        className={nameSelect}
        label="Выбирите имя фильтра"
        value={name}
        classes={{ select }}
        labelClasses={{ root: labelRoot }}
        {...register(`${VALUES_ARRAY_NAME}.${index}.name`)}
        onChange={handleChange}
        ref={ref}
      />
    );
  })
);

NameSelect.displayName = 'NameSelect';

export default NameSelect;
