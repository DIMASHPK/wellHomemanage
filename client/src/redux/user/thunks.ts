import Api from 'api';
import { AxiosError } from 'axios';
import { handleAxiosError, setLocalStorageValue } from 'utils/helpers';
import { AuthFormValues } from 'Layout/AuthForm/types';
import { SignInThunkType, UserStateType } from './types';
import { setUserData } from './reducer';

export const signInThunk: SignInThunkType =
  ({ username, password, rememberMe }) =>
  async dispatch => {
    try {
      const { data } = await Api.post<
        Omit<AuthFormValues, 'rememberMe'>,
        UserStateType['data']
      >({
        path: 'user/signin',
        data: { username, password },
      });

      setLocalStorageValue('rememberMe', rememberMe);
      setLocalStorageValue('accessToken', data.accessToken);
      setLocalStorageValue('expiresIn', data.expiresIn);

      Api.addNewHeaders({ authorization: `Bearer ${data.accessToken}` });

      dispatch(setUserData(data));
    } catch (err) {
      handleAxiosError(err as AxiosError);
    }
  };
