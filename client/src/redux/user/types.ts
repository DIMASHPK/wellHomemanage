import { AuthFormValues } from 'Layout/AuthForm/types';
import { AppThunk } from '../types';

export interface UserStateType {
  data: {
    username: string | null;
    accessToken: string | null;
    expiresIn: string | null;
  };
}

export type SignInThunkType = (data: AuthFormValues) => AppThunk;
