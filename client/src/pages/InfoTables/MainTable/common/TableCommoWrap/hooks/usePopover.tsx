import React from 'react';
import type { UsePopoverType } from './types';

export const usePopover = (): UsePopoverType => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return {
    id,
    handleClose,
    anchorEl,
    handleClick,
    open,
  };
};
