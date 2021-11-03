import Button from '@material-ui/core/Button';
import React, { memo } from 'react';
import clsx from 'clsx';
import omit from 'lodash/omit';
import { useStyles } from './styles';
import { ResponsiveButtonPropsType } from './types';

const ResponsiveButton: React.FC<ResponsiveButtonPropsType> = memo(props => {
  const { icon = null, children, classes, className, ...restProps } = props;

  const { tipWrapper, root } = useStyles();

  return (
    <Button
      className={clsx(root, className)}
      {...restProps}
      classes={omit(classes, ['tipWrapper'])}
    >
      {icon}
      <span className={clsx(tipWrapper, classes?.tipWrapper)}>{children}</span>
    </Button>
  );
});

ResponsiveButton.displayName = 'ResponsiveButton';

export default ResponsiveButton;
