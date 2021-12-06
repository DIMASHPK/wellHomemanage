import Api from 'api';
import { PATHS } from 'api/constants';
import { AppThunk } from 'redux/types';
import { GetAllDataType } from 'api/types';
import { getDataWithCreatedData } from 'utils/objects';
import { CamelToSnakeKeys } from 'constants/types';
import { handleAxiosError, transformFiltersForApi } from 'utils/api';
import { AxiosError } from 'axios';
import { handleResetSelectedCells, setData } from './reducer';
import { AddDataType, FlatType, UpdateDataType, GetFlatsType } from './types';

export const getFlats: GetFlatsType =
  () =>
  async (dispatch, getState): Promise<void> => {
    const {
      flats: { rowsPerPage, page, orderBy, orderOption, filters },
    } = getState();

    const { data } = await Api.get<
      GetAllDataType<CamelToSnakeKeys<FlatType>[]>
    >({
      path: PATHS.FLATS,
      page,
      rowsPerPage,
      orderBy,
      orderOption,
      filters: transformFiltersForApi({
        filters,
        selectedTabName: 'flats',
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

export const addFlats =
  (data: AddDataType): AppThunk =>
  async dispatch => {
    try {
      if (!data.flats.length) return;

      await Api.post<AddDataType>({
        path: 'flats/add',
        data,
      });

      dispatch(getFlats());
    } catch (e) {
      handleAxiosError(e as AxiosError);
    }
  };

export const removeFlats = (): AppThunk => async (dispatch, getState) => {
  try {
    const {
      flats: { selectedCells },
    } = getState();

    await Api.delete({
      path: 'flats/remove',
      data: { ids: selectedCells },
    });

    dispatch(handleResetSelectedCells());
    dispatch(getFlats());
  } catch (e) {
    handleAxiosError(e as AxiosError);
  }
};

export const updateFlats =
  (data: UpdateDataType): AppThunk =>
  async dispatch => {
    try {
      if (!data.flats.length) return;

      await Api.put<UpdateDataType>({
        path: 'flats/update',
        data,
      });

      dispatch(handleResetSelectedCells());
      dispatch(getFlats());
    } catch (e) {
      handleAxiosError(e as AxiosError);
    }
  };
