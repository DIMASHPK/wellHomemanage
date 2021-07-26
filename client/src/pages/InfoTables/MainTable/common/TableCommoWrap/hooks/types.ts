import React from 'react';

export interface UsePopoverType {
  id: undefined | string;
  handleClose: () => void;
  anchorEl: HTMLDivElement | null;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  open: boolean;
}
