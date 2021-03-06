import React, { memo, useCallback } from 'react';
import CreatingPopover from 'components/CreatingPopover';
import { GetOptionalType } from 'constants/types';
import { TAB_NAMES } from 'constants/tabs';
import AddIcon from '@material-ui/icons/Add';
import ResponsiveButton from 'components/ResponsiveButton';
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
    ({ type }: { type: GetOptionalType<typeof TAB_NAMES> }) => {
      append({ ...INITIAL_VALUES_MAPPING[type] });
    },
    [append]
  );

  return (
    <>
      <ResponsiveButton
        variant="contained"
        color="secondary"
        className={className}
        onClick={handleClick}
        icon={<AddIcon />}
      >
        Добавить
      </ResponsiveButton>
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
