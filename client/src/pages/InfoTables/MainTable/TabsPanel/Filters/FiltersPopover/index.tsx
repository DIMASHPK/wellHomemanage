import React, { memo, useMemo } from 'react';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';
import { FiltersPopoverPropsType } from './types';
import FilterItem from './FilterItem';
import { getIsDisableAdding } from './helpers';

const FiltersPopover: React.FC<FiltersPopoverPropsType> = memo(props => {
  const {
    onClose,
    anchorEl,
    filters,
    selectedTabName,
    onAddFilter,
    onRemoveFilter,
    setFilters,
  } = props;

  const isDisableAdding = useMemo(
    () => getIsDisableAdding({ selectedTabName, filters }),
    [filters, selectedTabName]
  );

  const { filtersTitle, popoverPaper, filtersContainer, actionsContainer } =
    useStyles();

  const open = Boolean(anchorEl);
  const id = open ? 'filter-popover' : undefined;

  const renderFilter = (
    filter: FiltersPopoverPropsType['filters'][number],
    index: number
  ) => (
    <FilterItem
      filters={filters}
      selectedTabName={selectedTabName}
      index={index}
      key={filter.name}
      onRemoveFilter={onRemoveFilter}
      setFilters={setFilters}
    />
  );

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      classes={{ paper: popoverPaper }}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Typography className={filtersTitle}>Фильтры</Typography>
      <div className={filtersContainer}>{filters.map(renderFilter)}</div>
      <div className={actionsContainer}>
        <Button
          variant="contained"
          color="primary"
          onClick={onAddFilter}
          disabled={isDisableAdding}
        >
          + Добавить фильтр
        </Button>
        <Button onClick={onClose} variant="contained" color="secondary">
          Отмена
        </Button>
      </div>
    </Popover>
  );
});

FiltersPopover.displayName = 'FiltersPopover';

export default FiltersPopover;
