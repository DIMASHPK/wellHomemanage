import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import React, { memo } from 'react';
import { IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from './styles';
import type { CommonDialogTypes } from './types';

const CommonDialog: React.FC<CommonDialogTypes> = memo(props => {
  const { open, children, title, onClose } = props;

  const {
    titleContainer,
    closeButton,
    titleClass,
    modalContainer,
    closeButtonIcon,
  } = useStyles();

  return (
    <Dialog open={open} onClose={onClose} classes={{ paper: modalContainer }}>
      <DialogTitle className={titleContainer}>
        <Typography component="span" className={titleClass}>
          {title}
        </Typography>
        <IconButton className={closeButton} onClick={onClose}>
          <CloseIcon className={closeButtonIcon} color="secondary" />
        </IconButton>
      </DialogTitle>
      {children}
    </Dialog>
  );
});

CommonDialog.displayName = 'CommonDialog';

export default CommonDialog;
