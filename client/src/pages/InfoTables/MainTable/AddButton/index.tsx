import React, { memo, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import CreatingPopover from 'components/CreatingPopover';
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
    ({ type }) => onDialogData({ title: 'Добавить запись', type }),
    [onDialogData]
  );

  return (
    <>
      <Button className={addButton} onClick={handleClick}>
        + Добавить
      </Button>
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
