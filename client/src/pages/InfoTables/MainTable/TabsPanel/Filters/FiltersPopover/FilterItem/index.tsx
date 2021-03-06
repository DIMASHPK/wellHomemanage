import React, { memo, useMemo } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import { FilterItemPropsType } from './types';
import { useStyles } from './styles';
import CondSelect from './CondSelect';
import { useInput } from './hooks/useInput';
import NameSelect from './NameSelect';

const FilterItem: React.FC<FilterItemPropsType> = memo(props => {
  const { filters, selectedTabName, index, onRemoveFilter, control } = props;

  const currentFilter = filters[index];
  const { name } = currentFilter;

  const { filterItemContainer, valueInput } = useStyles({ filters });

  const { renderInput } = useInput({
    name,
    selectedTabName,
    className: valueInput,
    index,
    control,
  });

  const isDisabled = useMemo(
    () =>
      Boolean(
        !Object.values(filters[index]).some(item => item || item?.length)
      ),
    [filters, index]
  );

  return (
    <div className={filterItemContainer}>
      <CondSelect
        currentFilter={currentFilter}
        index={index}
        filters={filters}
      />
      <NameSelect
        selectedTabName={selectedTabName}
        filters={filters}
        index={index}
        currentFilter={currentFilter}
      />
      {renderInput()}
      <IconButton
        disabled={isDisabled}
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
