import React, { memo, useCallback } from 'react';
import Select from 'components/fields/Select';
import {
  VALUES_ARRAY_NAME,
  FILTER_COND_ITEM_OPTIONS,
} from 'pages/InfoTables/MainTable/TabsPanel/Filters/constants';
import { useFormContext } from 'react-hook-form';
import { CondSelectPropsType } from './types';
import { useStyles } from './styles';

const CondSelect: React.FC<CondSelectPropsType> = memo(props => {
  const { currentFilter, index, filters } = props;

  const { setValue } = useFormContext();

  const { condSelect } = useStyles();

  const conditionsOptions = Object.values(FILTER_COND_ITEM_OPTIONS);

  const handleChange = useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) => {
      const { value } = event.target;

      setValue(
        VALUES_ARRAY_NAME,
        filters.map((item, i) =>
          i > 0
            ? {
                ...item,
                cond: value as CondSelectPropsType['currentFilter']['cond'],
              }
            : { ...item }
        )
      );
    },
    [filters, setValue]
  );

  return (
    <>
      {Object.keys(currentFilter).includes('cond') ? (
        <Select
          options={conditionsOptions}
          className={condSelect}
          label="Условие"
          value={currentFilter?.cond}
          disabled={index > 1}
          name={`${VALUES_ARRAY_NAME}.${index}.cond`}
          onChange={handleChange}
        />
      ) : (
        filters.length > 1 && <div className={condSelect} />
      )}
    </>
  );
});

CondSelect.displayName = 'CondSelect';

export default CondSelect;
