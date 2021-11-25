import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { signInThunk } from 'redux/user/thunks';
import { AuthFormValues } from '../types';

export const useSubmit = () => {
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    async (values: AuthFormValues) => {
      await dispatch(signInThunk(values));
    },
    [dispatch]
  );

  return {
    onSubmit,
  };
};
