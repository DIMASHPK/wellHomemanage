import Api from 'api';
import { PATHS } from 'api/constants';
import { AppThunk } from 'redux/types';
import { objectKeysToCamelFromSnakeCase } from 'utils/strings';
import { GetAllDataType } from 'api/types';
import { setData } from './reducer';
import { HouseType } from './types';

export const getHouses =
  (): AppThunk =>
  async (dispatch, getState): Promise<void> => {
    const {
      houses: { rowsPerPage, page, orderBy, orderOption },
    } = getState();

    const { data } = await Api.getAll<GetAllDataType<HouseType[]>>({
      path: PATHS.HOUSES,
      page,
      rowsPerPage,
      orderBy,
      orderOption,
    });

    const reformattedData = data?.data?.map(item =>
      objectKeysToCamelFromSnakeCase(item)
    );

    dispatch(setData({ count: data.count, data: reformattedData }));
  };
