import React from 'react';
import { useForm } from 'react-hook-form';
import { AuthInput } from 'components/fields/Input/Form';
import { AuthCheckbox } from 'components/fields/Checkbox/Form';
import LoadableButton from 'components/LoadableButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { AuthFormValues, GetInputPropsArgsType } from './types';
import { useStyles } from './styles';

const AuthForm = () => {
  const { form, input, checkbox, submitButton } = useStyles();

  const { control } = useForm<AuthFormValues>({
    defaultValues: {
      login: '',
      password: '',
      rememberMe: false,
    },
  });

  const getInputProps = (data: GetInputPropsArgsType) =>
    ({
      variant: 'outlined',
      control,
      className: input,
      rules: {
        required: true,
      },
      ...data,
    } as const);

  return (
    <form className={form}>
      <AuthInput {...getInputProps({ name: 'login', label: 'Логин' })} />
      <AuthInput {...getInputProps({ name: 'password', label: 'Пароль' })} />
      <FormControlLabel
        control={
          <AuthCheckbox name="rememberMe" control={control} color="primary" />
        }
        label="Запомнить меня"
        className={checkbox}
      />
      <LoadableButton
        className={submitButton}
        isSubmitting={false}
        title="Войти"
        disabled={false}
        icon={LockOpenIcon}
      />
    </form>
  );
};

export default AuthForm;
