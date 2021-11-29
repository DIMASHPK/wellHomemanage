export interface AuthFormValues {
  username: string;
  password: string;
  rememberMe: boolean;
}

export interface GetInputPropsArgsType {
  name: keyof Omit<AuthFormValues, 'rememberMe'>;
  label: string;
}
