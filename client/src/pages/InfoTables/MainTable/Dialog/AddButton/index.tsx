import React, { memo, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import CreatingPopover from 'components/CreatingPopover';
import { getOptionalType } from 'constants/types';
import { TAB_NAMES } from 'constants/tabs';
import { INITIAL_VALUES_MAPPING } from '../constants';
import { AddButtonTypes } from './types';

const AddButton: React.FC<AddButtonTypes> = memo(props => {
  const { className, append } = props;

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = useCallback(
    ({ type }: { type: getOptionalType<typeof TAB_NAMES> }) => {
      append({ ...INITIAL_VALUES_MAPPING[type] });
    },
    [append]
  );

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        className={className}
        onClick={handleClick}
      >
        Добавить
      </Button>
      <CreatingPopover
        onClose={handleClose}
        anchorEl={anchorEl}
        id="CreatingPopoverFromFormButton"
        onButtonClick={handleMenuItemClick}
      />
    </>
  );
});

AddButton.displayName = 'AddButton';

export default AddButton;
