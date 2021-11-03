import React, { memo, useCallback } from 'react';
import CreatingPopover from 'components/CreatingPopover';
import AddIcon from '@material-ui/icons/Add';
import ResponsiveButton from 'components/ResponsiveButton';
import { useStyles } from './styles';
import { AddButtonType } from './types';

const AddButton: React.FC<AddButtonType> = memo(props => {
  const { onDialogData } = props;

  const { addButton } = useStyles();

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
    ({ type }) => onDialogData({ title: 'Добавить запись', type, edit: false }),
    [onDialogData]
  );

  return (
    <>
      <ResponsiveButton
        className={addButton}
        onClick={handleClick}
        icon={<AddIcon />}
      >
        Добавить
      </ResponsiveButton>
      <CreatingPopover
        onClose={handleClose}
        anchorEl={anchorEl}
        id="CreatingPopoverFromButton"
        onButtonClick={handleMenuItemClick}
      />
    </>
  );
});

AddButton.displayName = 'AddButton';

export default AddButton;
