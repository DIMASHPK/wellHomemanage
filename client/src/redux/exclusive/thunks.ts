import Api from 'api';
import { PATHS } from 'api/constants';
import { AppThunk } from 'redux/types';
import { objectKeysToCamelFromSnakeCase } from 'utils/strings';
import { setData } from './reducer';
import { ExclusiveResponseInterface } from './types';

export const getExclusives =
  (): AppThunk =>
  async (dispatch, getState): Promise<void> => {
    const {
      exclusives: { rowsPerPage, page },
    } = getState();

    const { data } = await Api.getAll<ExclusiveResponseInterface>({
      path: PATHS.EXCLUSIVES,
      page,
      rowsPerPage,
    });

    const reformattedData = data?.data?.map(item =>
      objectKeysToCamelFromSnakeCase(item)
    );

    dispatch(setData({ count: data.count, data: reformattedData }));
  };
