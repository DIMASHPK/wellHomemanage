import React from 'react';

export interface LoadableButtonType {
  isSubmitting?: boolean;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: React.FC<any>;
  disabled?: boolean;
  className?: string;
}
