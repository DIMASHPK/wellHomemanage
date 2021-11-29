import React, { memo } from 'react';
import SaveIcon from '@material-ui/icons/Save';
import ModeEditIcon from '@material-ui/icons/Edit';
import LoadableButton from 'components/LoadableButton';
import { SubmitButtonType } from './types';

const SubmitButton: React.FC<SubmitButtonType> = memo(props => {
  const { isSubmitting, edit, ...rest } = props;

  return (
    <LoadableButton
      disabled={isSubmitting}
      icon={edit ? ModeEditIcon : SaveIcon}
      isSubmitting={isSubmitting}
      title={edit ? 'Изменить' : 'Сохранить'}
      {...rest}
    />
  );
});

SubmitButton.displayName = 'SubmitButton';

export default SubmitButton;
