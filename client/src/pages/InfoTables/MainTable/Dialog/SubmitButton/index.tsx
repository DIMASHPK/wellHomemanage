import React, { memo, useMemo } from 'react';
import { CircularProgress } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import ModeEditIcon from '@material-ui/icons/Edit';
import ResponsiveButton from 'components/ResponsiveButton';
import { SubmitButtonType } from './types';
import { useStyles } from './styles';

const SubmitButton: React.FC<SubmitButtonType> = memo(props => {
  const { isSubmitting, edit, className } = props;

  const { iconFontSize, loader } = useStyles();

  const icon = useMemo(() => {
    const Icon = edit ? ModeEditIcon : SaveIcon;

    if (isSubmitting) {
      return <CircularProgress className={loader} color="inherit" />;
    }

    return <Icon color="inherit" className={iconFontSize} />;
  }, [edit, iconFontSize, isSubmitting, loader]);

  return (
    <ResponsiveButton
      type="submit"
      variant="contained"
      color="primary"
      className={className}
      disabled={isSubmitting}
      icon={icon}
    >
      {edit ? 'Изменить' : 'Сохранить'}
    </ResponsiveButton>
  );
});

SubmitButton.displayName = 'SubmitButton';

export default SubmitButton;
