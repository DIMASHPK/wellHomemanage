import Api from 'api';
import { PATHS } from 'api/constants';
import { AppThunk } from 'redux/types';
import { GetAllDataType } from 'api/types';
import { getDataWithCreatedData } from 'utils/objects';
import { CamelToSnakeKeys } from 'constants/types';
import { handleResetSelectedCells, setData } from './reducer';
import { AddDataType, FlatType, UpdateDataType, GetFlatsType } from './types';

export const getFlats: GetFlatsType =
  filters =>
  async (dispatch, getState): Promise<void> => {
    try {
      const {
        flats: { rowsPerPage, page, orderBy, orderOption },
      } = getState();

      const { data } = await Api.getAll<
        GetAllDataType<CamelToSnakeKeys<FlatType>[]>
      >({
        path: PATHS.FLATS,
        page,
        rowsPerPage,
        orderBy,
        orderOption,
        filters,
      });

      const reformattedData = data?.data?.map(getDataWithCreatedData);

      dispatch(setData({ count: data.count, data: reformattedData }));
    } catch (e) {
      console.log(e);
    }
  };

export const addFlats =
  (data: AddDataType): AppThunk =>
  async dispatch => {
    try {
      if (!data.flats.length) return;

      await Api.add<AddDataType>({
        path: 'flats/add',
        data,
      });

      dispatch(getFlats());
    } catch (e) {
      console.log(e);
    }
  };

export const removeFlats = (): AppThunk => async (dispatch, getState) => {
  try {
    const {
      flats: { selectedCells },
    } = getState();

    await Api.remove({
      path: 'flats/remove',
      data: { ids: selectedCells },
    });

    dispatch(handleResetSelectedCells());
    dispatch(getFlats());
  } catch (e) {
    console.log(e);
  }
};

export const updateFlats =
  (data: UpdateDataType): AppThunk =>
  async dispatch => {
    try {
      if (!data.flats.length) return;

      await Api.update<UpdateDataType>({
        path: 'flats/update',
        data,
      });

      dispatch(handleResetSelectedCells());
      dispatch(getFlats());
    } catch (e) {
      console.log(e);
    }
  };
