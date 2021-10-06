import Button from '@material-ui/core/Button';
import CommonDialog from 'components/Dialog';
import React, { memo } from 'react';
import { useAppSelector } from 'redux/hooks';
import { RemoveConfirmType } from './types';
import { useStyles } from './styles';
import { useRemove } from './hooks/useRemove';

const RemoveConfirm: React.FC<RemoveConfirmType> = memo(props => {
  const { onClose, open, selectedTabName } = props;

  const { selectedCells } = useAppSelector(state => state[selectedTabName]);

  const { buttonContainer, modalContainer, titleContainer } = useStyles();

  const { disabled, handleRemove } = useRemove({ onClose, selectedTabName });

  const title = (
    <>
      Вы действительно хотите удалить <br />
      выделенные ряды?
    </>
  );

  return (
    <CommonDialog
      onClose={onClose}
      title={title}
      open={open}
      withCloseButton={false}
      classes={{ modalContainer, titleContainer }}
    >
      <div className={buttonContainer}>
        <Button
          variant="contained"
          onClick={handleRemove}
          color="secondary"
          disabled={disabled}
        >
          ({selectedCells.length}) Удалить
        </Button>
        <Button
          variant="contained"
          onClick={onClose}
          color="primary"
          disabled={disabled}
        >
          Отмена
        </Button>
      </div>
    </CommonDialog>
  );
});

RemoveConfirm.displayName = 'RemoveConfirm';

export default RemoveConfirm;
