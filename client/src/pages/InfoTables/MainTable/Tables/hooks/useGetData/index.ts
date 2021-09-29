import { useDispatch } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { UseGetDataHookArgsType, UseGetDataHookReturnType } from './types';

export const useGetData = ({
  thunk,
}: UseGetDataHookArgsType): UseGetDataHookReturnType => {
  const [state, setState] = useState({ error: '', loading: false });

  const handleState = useCallback(data => {
    setState(state => ({ ...state, ...data }));
  }, []);

  const dispatch = useDispatch();

  const handleLoad = useCallback(async () => {
    try {
      handleState({ loading: true });

      await dispatch(thunk());
    } catch (e) {
      if (e instanceof Error) {
        handleState({ error: e.message });
      }

      console.log(e);
    } finally {
      handleState({ loading: false });
    }
  }, [dispatch, handleState, thunk]);

  useEffect(() => {
    (async () => {
      await handleLoad();
    })();
  }, [handleLoad]);

  return {
    ...state,
  };
};
