import React, { memo, useMemo } from 'react';
import { IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useFormContext } from 'react-hook-form';
import { VALUES_ARRAY_NAME } from 'pages/InfoTables/MainTable/Dialog/constants';
import { CommonFormTypes } from './types';
import { useStyles } from './styles';

const CommonForm: React.FC<CommonFormTypes> = memo(props => {
  const { control, name, remove, index, formInputs, title } = props;

  const { watch } = useFormContext();

  const currentForm = watch(VALUES_ARRAY_NAME);

  const {
    formItemWrapper,
    inputRoot,
    titleContainer,
    title: titleClassName,
    closeButton,
  } = useStyles();

  const handleClose = () => {
    remove(index);
  };

  const isDisabled = useMemo(
    () => currentForm?.length < 2,
    [currentForm.length]
  );

  return (
    <div className={formItemWrapper}>
      <div className={titleContainer}>
        <Typography className={titleClassName}>{title}</Typography>
        <IconButton
          className={closeButton}
          onClick={handleClose}
          disabled={isDisabled}
          color="primary"
        >
          <CloseIcon />
        </IconButton>
      </div>
      {formInputs.map(({ name: inputName, component: Component, ...rest }) => (
        <Component
          variant="outlined"
          key={`${name}.${inputName}`}
          classes={{ root: inputRoot }}
          control={control}
          name={`${name}.${inputName}`}
          {...rest}
        />
      ))}
    </div>
  );
});

CommonForm.displayName = 'CommonForm';

export default CommonForm;
