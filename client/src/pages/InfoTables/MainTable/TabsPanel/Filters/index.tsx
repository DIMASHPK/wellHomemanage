import Button from '@material-ui/core/Button';
import React, { memo, useCallback, useState } from 'react';
import { FormProvider } from 'react-hook-form';
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
      <Button className={filterButton} onClick={handleClick}>
        Фильтры
      </Button>
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
