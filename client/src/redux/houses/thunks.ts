import Api from 'api';
import { PATHS } from 'api/constants';
import { AppThunk } from 'redux/types';
import { objectKeysToCamelFromSnakeCase } from 'utils/strings';
import { setData } from './reducer';
import { HouseResponseInterface } from './types';

export const getHouses =
  (): AppThunk =>
  async (dispatch, getState): Promise<void> => {
    const {
      houses: { rowsPerPage, page },
    } = getState();

    const { data } = await Api.getAll<HouseResponseInterface>({
      path: PATHS.HOUSES,
      page,
      rowsPerPage,
    });

    const reformattedData = data?.data?.map(item =>
      objectKeysToCamelFromSnakeCase(item)
    );

    dispatch(setData({ count: data.count, data: reformattedData }));
  };
