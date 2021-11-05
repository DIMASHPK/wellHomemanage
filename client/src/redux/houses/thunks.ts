import Api from 'api';
import { PATHS } from 'api/constants';
import { AppThunk } from 'redux/types';
import { GetAllDataType } from 'api/types';
import { CamelToSnakeKeys } from 'constants/types';
import { getDataWithCreatedData } from 'utils/objects';
import { handleResetSelectedCells, setData } from './reducer';
import { AddDataType, HouseType, UpdateDataType, GetHousesType } from './types';

export const getHouses: GetHousesType =
  filters =>
  async (dispatch, getState): Promise<void> => {
    const {
      houses: { rowsPerPage, page, orderBy, orderOption },
    } = getState();

    const { data } = await Api.getAll<
      GetAllDataType<CamelToSnakeKeys<HouseType>[]>
    >({
      path: PATHS.HOUSES,
      page,
      rowsPerPage,
      orderBy,
      orderOption,
      filters,
    });

    const reformattedData = data?.data?.map(getDataWithCreatedData);

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
