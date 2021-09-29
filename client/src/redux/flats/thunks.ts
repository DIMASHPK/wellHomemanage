import Api from 'api';
import { AppThunk } from 'redux/types';
import { objectKeysToCamelFromSnakeCase } from 'utils/strings';
import { setData } from './reducer';
import { FlatResponseInterface } from './types';

export const getFlats =
  (): AppThunk =>
  async (dispatch): Promise<void> => {
    const { data } = await Api.getAll<FlatResponseInterface>({ path: 'flats' });

    const reformattedData = data?.data?.map(item =>
      objectKeysToCamelFromSnakeCase(item)
    );

    dispatch(setData({ count: data.count, data: reformattedData }));
  };
