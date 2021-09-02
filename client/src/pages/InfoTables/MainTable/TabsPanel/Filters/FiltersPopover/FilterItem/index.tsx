import React, { memo, useMemo } from 'react';
import Select from 'components/fields/Select';
import { FILTER_COND_ITEM_OPTIONS } from 'pages/InfoTables/MainTable/constants';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import { FilterItemPropsType } from './types';
import { useStyles } from './styles';
import { getNameOptions } from './helpers';
import { useFilterHandlers } from './hooks/useFilterHandlers';
import { useInput } from './hooks/useInput';

const FilterItem: React.FC<FilterItemPropsType> = memo(props => {
  const { filters, selectedTabName, index, onRemoveFilter, setFilters } = props;

  const currentFilter = filters[index];
  const { name, value, cond, type } = currentFilter;

  const { filterItemContainer, condSelect, nameSelect, valueInput } =
    useStyles();

  const conditionsOptions = Object.values(FILTER_COND_ITEM_OPTIONS);
  const nameOptions = useMemo(
    () => getNameOptions({ selectedTabName, name, filters }),
    [filters, name, selectedTabName]
  );

  const { onCondChange, onNameChange, onValueChange, onValueRangeChange } =
    useFilterHandlers({
      index,
      setFilters,
      selectedTabName,
    });

  const { renderInput } = useInput({
    type,
    value,
    className: valueInput,
    onValueChange,
    onValueRangeChange,
  });

  return (
    <div className={filterItemContainer}>
      {Object.keys(currentFilter).includes('cond') ? (
        <Select
          options={conditionsOptions}
          onChange={onCondChange}
          value={cond}
          className={condSelect}
          label="Условие"
          disabled={index > 1}
        />
      ) : (
        filters.length > 1 && <div className={condSelect} />
      )}
      <Select
        options={nameOptions}
        onChange={onNameChange}
        value={name}
        className={nameSelect}
        label="Выбирите имя фильтра"
      />
      {renderInput()}
      <IconButton
        disabled={!index}
        color="primary"
        onClick={() => onRemoveFilter(index)}
      >
        <CloseIcon />
      </IconButton>
    </div>
  );
});

FilterItem.displayName = 'FilterItem';

export default FilterItem;
