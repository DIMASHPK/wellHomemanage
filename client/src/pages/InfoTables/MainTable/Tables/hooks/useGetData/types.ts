import { AppThunk } from 'redux/types';

export interface UseGetDataHookArgsType {
  thunk: () => AppThunk;
}

export interface UseGetDataHookReturnType {
  error: string;
  loading: boolean;
}
