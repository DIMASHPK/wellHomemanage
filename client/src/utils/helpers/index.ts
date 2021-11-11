import React from 'react';
import { toast } from 'react-toastify';
import copy from 'copy-to-clipboard';

export const handleCopy =
  (content: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    copy(content);

    toast.success('Copied!', {
      position: 'bottom-right',
      autoClose: 1500,
    });
  };
