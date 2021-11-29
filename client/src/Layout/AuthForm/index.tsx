import React from 'react';
import { useForm } from 'react-hook-form';
import { AuthInput } from 'components/fields/Input/Form';
import { AuthCheckbox } from 'components/fields/Checkbox/Form';
import LoadableButton from 'components/LoadableButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { AuthFormValues, GetInputPropsArgsType } from './types';
import { useStyles } from './styles';
import { useSubmit } from './hooks/useSubmit';

const AuthForm = () => {
  const { form, input, checkbox, submitButton } = useStyles();

  const formData = useForm<AuthFormValues>({
    defaultValues: {
      username: '',
      password: '',
      rememberMe: false,
    },
  });

  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = formData;

  const getInputProps = (data: GetInputPropsArgsType) =>
    ({
      variant: 'outlined',
      control,
      className: input,
      rules: {
        required: 'Заполните поле',
      },
      ...data,
    } as const);

  const { onSubmit } = useSubmit();

  return (
    <form className={form} onSubmit={handleSubmit(onSubmit)}>
      <AuthInput {...getInputProps({ name: 'username', label: 'Логин' })} />
      <AuthInput {...getInputProps({ name: 'password', label: 'Пароль' })} />
      {/* <FormControlLabel
        control={
          <AuthCheckbox name="rememberMe" control={control} color="primary" />
        }
        label="Запомнить меня"
        className={checkbox}
      /> */}
      <LoadableButton
        className={submitButton}
        isSubmitting={isSubmitting}
        title="Войти"
        disabled={isSubmitting}
        icon={LockOpenIcon}
      />
    </form>
  );
};

export default AuthForm;
