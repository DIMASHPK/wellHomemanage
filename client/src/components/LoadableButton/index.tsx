import React, { memo, useMemo } from 'react';
import { CircularProgress } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import ResponsiveButton from 'components/ResponsiveButton';
import { LoadableButtonType } from './types';
import { useStyles } from './styles';

const LoadableButton: React.FC<LoadableButtonType> = memo(props => {
  const { isSubmitting, icon, title, ...rest } = props;

  const { iconFontSize, loader } = useStyles();

  const currentIcon = useMemo(() => {
    const Icon = icon || SaveIcon;

    if (isSubmitting) {
      return <CircularProgress className={loader} color="inherit" />;
    }

    return <Icon color="inherit" className={iconFontSize} />;
  }, [icon, iconFontSize, isSubmitting, loader]);

  return (
    <ResponsiveButton
      type="submit"
      variant="contained"
      color="primary"
      disabled={isSubmitting}
      icon={currentIcon}
      {...rest}
    >
      {title}
    </ResponsiveButton>
  );
});

LoadableButton.displayName = 'LoadableButton';

export default LoadableButton;
