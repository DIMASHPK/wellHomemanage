import React from 'react';
import type { UsePopoverType } from './types';

export const usePopover = (): UsePopoverType => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(
      event.currentTarget
        .closest('thead')
        ?.closest('div') as HTMLDivElement | null
    );
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
