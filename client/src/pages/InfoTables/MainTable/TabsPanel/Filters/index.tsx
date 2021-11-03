import React, { memo, useCallback, useState } from 'react';
import { FormProvider } from 'react-hook-form';
import FilterListIcon from '@material-ui/icons/FilterList';
import ResponsiveButton from 'components/ResponsiveButton';
import { useStyles } from './styles';
import { FiltersPropsType } from './types';
import FiltersPopover from './FiltersPopover';

const Filters: React.FC<FiltersPropsType> = memo(props => {
  const { reactHookFormData, ...restProps } = props;

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const { filterButton } = useStyles();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <FormProvider {...reactHookFormData}>
      <ResponsiveButton
        icon={<FilterListIcon />}
        className={filterButton}
        onClick={handleClick}
      >
        Фильтры
      </ResponsiveButton>
      <FiltersPopover
        anchorEl={anchorEl}
        onClose={handleClose}
        {...restProps}
      />
    </FormProvider>
  );
});

Filters.displayName = 'Filters';

export default Filters;
