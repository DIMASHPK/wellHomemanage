import Button from '@material-ui/core/Button';
import React, { memo, useCallback, useState } from 'react';
import { useStyles } from './styles';
import { FiltersPropsType } from './types';
import FiltersPopover from './FiltersPopover';

const Filters: React.FC<FiltersPropsType> = memo(props => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const { filterButton } = useStyles();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      <Button className={filterButton} onClick={handleClick}>
        Фильтры
      </Button>
      <FiltersPopover anchorEl={anchorEl} onClose={handleClose} {...props} />
    </>
  );
});

Filters.displayName = 'Filters';

export default Filters;
