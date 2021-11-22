import React, { memo, useMemo } from 'react';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import ResponsiveButton from 'components/ResponsiveButton';
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
    onReset,
    control,
    fields,
  } = props;

  const isDisableAdding = useMemo(
    () => getIsDisableAdding({ selectedTabName, filters }),
    [filters, selectedTabName]
  );

  const {
    filtersTitle,
    popoverPaper,
    filtersContainer,
    actionsContainer,
    titleContainer,
    closeButton,
  } = useStyles();

  const open = Boolean(anchorEl);
  const id = open ? 'filter-popover' : undefined;

  const renderFilter = (
    field: FiltersPopoverPropsType['fields'][number],
    index: number
  ) => (
    <FilterItem
      filters={filters}
      selectedTabName={selectedTabName}
      index={index}
      key={field.id}
      onRemoveFilter={onRemoveFilter}
      control={control}
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
      <div className={titleContainer}>
        <Typography className={filtersTitle}>Фильтры</Typography>
        <IconButton className={closeButton} onClick={onClose}>
          <CloseIcon color="primary" />
        </IconButton>
      </div>
      <div className={filtersContainer}>{fields.map(renderFilter)}</div>
      <div className={actionsContainer}>
        <ResponsiveButton
          variant="contained"
          color="primary"
          onClick={onAddFilter}
          disabled={isDisableAdding}
          icon={<AddIcon />}
        >
          Добавить фильтр
        </ResponsiveButton>
        <ResponsiveButton
          onClick={onReset}
          variant="contained"
          color="secondary"
          icon={<RotateLeftIcon />}
        >
          Сбросить все
        </ResponsiveButton>
      </div>
    </Popover>
  );
});

FiltersPopover.displayName = 'FiltersPopover';

export default FiltersPopover;
