import React, { memo, useMemo } from 'react';
import { CircularProgress } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';
import ModeEditIcon from '@material-ui/icons/Edit';
import clsx from 'clsx';
import { useStyles } from './styles';
import { SubmitButtonType } from './types';

const SubmitButton: React.FC<SubmitButtonType> = memo(props => {
  const { isSubmitting, edit, className } = props;

  const { submitIcon, iconFontSize } = useStyles();

  const renderIcon = useMemo(() => {
    const Icon = edit ? ModeEditIcon : CheckIcon;

    if (isSubmitting) {
      return (
        <CircularProgress size={15} color="inherit" className={submitIcon} />
      );
    }

    return <Icon color="inherit" className={clsx(submitIcon, iconFontSize)} />;
  }, [edit, iconFontSize, isSubmitting, submitIcon]);

  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      className={className}
      disabled={isSubmitting}
    >
      {renderIcon}
      {edit ? 'Изменить' : 'Сохранить'}
    </Button>
  );
});

SubmitButton.displayName = 'SubmitButton';

export default SubmitButton;
