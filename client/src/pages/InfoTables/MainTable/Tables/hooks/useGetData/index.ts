import { useDispatch } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { TablePropsType } from 'pages/InfoTables/common/Table/types';
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
    if (activeTab !== myTab) return;

    (async () => {
      await handleLoad();
    })();
  }, [handleLoad, page, rowsPerPage, orderBy, orderOption, activeTab, myTab]);

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
