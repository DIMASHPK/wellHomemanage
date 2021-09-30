import Api from 'api';
import { PATHS } from 'api/constants';
import { AppThunk } from 'redux/types';
import { objectKeysToCamelFromSnakeCase } from 'utils/strings';
import { GetAllDataType } from 'api/types';
import { setData } from './reducer';
import { FlatType } from './types';

export const getFlats =
  (): AppThunk =>
  async (dispatch, getState): Promise<void> => {
    const {
      flats: { rowsPerPage, page, orderBy, orderOption },
    } = getState();

    const { data } = await Api.getAll<GetAllDataType<FlatType[]>>({
      path: PATHS.FLATS,
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
