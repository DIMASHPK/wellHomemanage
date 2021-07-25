import React from 'react';

export interface UsePopoverType {
  id: undefined | string;
  handleClose: () => void;
  anchorEl: HTMLButtonElement | null;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  open: boolean;
}
