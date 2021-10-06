import Api from 'api';
import { PATHS } from 'api/constants';
import { AppThunk } from 'redux/types';
import { objectKeysToCamelFromSnakeCase } from 'utils/strings';
import { GetAllDataType } from 'api/types';
import { handleResetSelectedCells, setData } from './reducer';
import { AddDataType, HouseType, UpdateDataType } from './types';

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

export const addHouses =
  (data: AddDataType): AppThunk =>
  async dispatch => {
    try {
      if (!data.houses.length) return;

      await Api.add<AddDataType>({
        path: 'houses/add',
        data,
      });

      dispatch(getHouses());
    } catch (e) {
      console.log(e);
    }
  };

export const removeHouses = (): AppThunk => async (dispatch, getState) => {
  try {
    const {
      houses: { selectedCells },
    } = getState();

    await Api.remove({
      path: 'houses/remove',
      data: { ids: selectedCells },
    });

    dispatch(handleResetSelectedCells());
    dispatch(getHouses());
  } catch (e) {
    console.log(e);
  }
};

export const updateHouses =
  (data: UpdateDataType): AppThunk =>
  async dispatch => {
    try {
      if (!data.houses.length) return;

      await Api.update<UpdateDataType>({
        path: 'houses/update',
        data,
      });

      dispatch(handleResetSelectedCells());
      dispatch(getHouses());
    } catch (e) {
      console.log(e);
    }
  };
