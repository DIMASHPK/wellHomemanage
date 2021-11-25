import { useDispatch } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { TablePropsType } from 'pages/InfoTables/common/Table/types';
import { AxiosError } from 'axios';
import { handleAxiosError } from 'utils/helpers';
import { useAppSelector } from 'redux/hooks';
import { UseGetDataHookArgsType, UseGetDataHookReturnType } from './types';

export const useGetData = ({
  thunk,
  handleRowsPerPageChange,
  handlePageChange,
  page = 0,
  rowsPerPage = 0,
  orderBy,
  orderOption,
  activeTab,
  myTab,
}: UseGetDataHookArgsType): UseGetDataHookReturnType => {
  const [state, setState] = useState({ error: '', loading: false });

  const token = useAppSelector(
    ({
      user: {
        data: { accessToken },
      },
    }) => accessToken
  );

  const handleState = useCallback(data => {
    setState(state => ({ ...state, ...data }));
  }, []);

  const dispatch = useDispatch();

  const handleLoad = useCallback(async () => {
    try {
      handleState({ loading: true });

      await dispatch(thunk());
    } catch (e) {
      handleAxiosError(e as AxiosError);
      handleState({
        error:
          (e as AxiosError)?.response?.data?.message ||
          (e as AxiosError).message,
      });
    } finally {
      handleState({ loading: false });
    }
  }, [dispatch, handleState, thunk]);

  useEffect(() => {
    if (activeTab !== myTab || !token) return;

    (async () => {
      await handleLoad();
    })();
  }, [
    handleLoad,
    page,
    rowsPerPage,
    orderBy,
    orderOption,
    activeTab,
    myTab,
    token,
  ]);

  const onPageChange: TablePropsType['onPageChange'] = useCallback(
    (_, page) => {
      dispatch(handlePageChange(page));
    },
    [dispatch, handlePageChange]
  );

  const onRowsPerPageChange: TablePropsType['onRowsPerPageChange'] =
    useCallback(
      event => {
        const { value } = event.target;

        dispatch(handleRowsPerPageChange(parseInt(value)));
      },
      [dispatch, handleRowsPerPageChange]
    );

  return {
    ...state,
    onPageChange,
    onRowsPerPageChange,
  };
};
