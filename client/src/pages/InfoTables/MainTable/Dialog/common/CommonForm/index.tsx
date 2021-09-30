import React, { memo, useMemo } from 'react';
import { IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useFormContext } from 'react-hook-form';
import { CommonFormTypes } from './types';
import { useStyles } from './styles';

const CommonForm: React.FC<CommonFormTypes> = memo(props => {
  const { control, name, remove, index, formInputs, title } = props;

  const { getValues } = useFormContext();

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
    () => getValues()?.tableForm?.length < 2,
    [getValues]
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
