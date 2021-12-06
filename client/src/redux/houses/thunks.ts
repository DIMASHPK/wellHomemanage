import Api from 'api';
import { PATHS } from 'api/constants';
import { AppThunk } from 'redux/types';
import { GetAllDataType } from 'api/types';
import { CamelToSnakeKeys } from 'constants/types';
import { getDataWithCreatedData } from 'utils/objects';
import { handleAxiosError, transformFiltersForApi } from 'utils/api';
import { AxiosError } from 'axios';
import { handleResetSelectedCells, setData } from './reducer';
import { AddDataType, HouseType, UpdateDataType, GetHousesType } from './types';

export const getHouses: GetHousesType =
  () =>
  async (dispatch, getState): Promise<void> => {
    const {
      houses: { rowsPerPage, page, orderBy, orderOption, filters },
    } = getState();

    const { data } = await Api.get<
      GetAllDataType<CamelToSnakeKeys<HouseType>[]>
    >({
      path: PATHS.HOUSES,
      page,
      rowsPerPage,
      orderBy,
      orderOption,
      filters: transformFiltersForApi({
        filters,
        selectedTabName: 'houses',
      }),
    });

    const reformattedData = data?.data?.map(getDataWithCreatedData);

    dispatch(
      setData({
        count: parseInt(data?.count) || 0,
        data: reformattedData || [],
      })
    );
  };

export const addHouses =
  (data: AddDataType): AppThunk =>
  async dispatch => {
    try {
      if (!data.houses.length) return;

      await Api.post<AddDataType>({
        path: 'houses/add',
        data,
      });

      dispatch(getHouses());
    } catch (e) {
      handleAxiosError(e as AxiosError);
    }
  };

export const removeHouses = (): AppThunk => async (dispatch, getState) => {
  try {
    const {
      houses: { selectedCells },
    } = getState();

    await Api.delete({
      path: 'houses/remove',
      data: { ids: selectedCells },
    });

    dispatch(handleResetSelectedCells());
    dispatch(getHouses());
  } catch (e) {
    handleAxiosError(e as AxiosError);
  }
};

export const updateHouses =
  (data: UpdateDataType): AppThunk =>
  async dispatch => {
    try {
      if (!data.houses.length) return;

      await Api.put<UpdateDataType>({
        path: 'houses/update',
        data,
      });

      dispatch(handleResetSelectedCells());
      dispatch(getHouses());
    } catch (e) {
      handleAxiosError(e as AxiosError);
    }
  };
