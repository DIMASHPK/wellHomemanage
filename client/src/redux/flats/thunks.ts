import Api from 'api';
import { PATHS } from 'api/constants';
import { AppThunk } from 'redux/types';
import { objectKeysToCamelFromSnakeCase } from 'utils/strings';
import { setData } from './reducer';
import { FlatResponseInterface } from './types';

export const getFlats =
  (): AppThunk =>
  async (dispatch, getState): Promise<void> => {
    const {
      flats: { rowsPerPage, page },
    } = getState();

    const { data } = await Api.getAll<FlatResponseInterface>({
      path: PATHS.FLATS,
      page,
      rowsPerPage,
    });

    const reformattedData = data?.data?.map(item =>
      objectKeysToCamelFromSnakeCase(item)
    );

    dispatch(setData({ count: data.count, data: reformattedData }));
  };
