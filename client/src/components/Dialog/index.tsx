import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import React, { memo } from 'react';
import { IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';
import { useStyles } from './styles';
import type { CommonDialogTypes } from './types';

const CommonDialog: React.FC<CommonDialogTypes> = memo(props => {
  const {
    open,
    children,
    title,
    onClose,
    classes,
    withCloseButton = true,
  } = props;

  const {
    titleContainer,
    closeButton,
    titleClass,
    modalContainer,
    closeButtonIcon,
  } = useStyles();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      classes={{ paper: clsx(modalContainer, classes?.modalContainer) }}
    >
      <DialogTitle className={clsx(titleContainer, classes?.titleContainer)}>
        <Typography
          component="span"
          className={clsx(titleClass, classes?.titleClass)}
        >
          {title}
        </Typography>
        {withCloseButton && (
          <IconButton
            className={clsx(closeButton, classes?.closeButton)}
            onClick={onClose}
          >
            <CloseIcon
              className={clsx(closeButtonIcon, classes?.closeButtonIcon)}
              color="secondary"
            />
          </IconButton>
        )}
      </DialogTitle>
      {children}
    </Dialog>
  );
});

CommonDialog.displayName = 'CommonDialog';

export default CommonDialog;
