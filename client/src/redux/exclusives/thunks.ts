import Api from 'api';
import { PATHS } from 'api/constants';
import { AppThunk } from 'redux/types';
import { GetAllDataType } from 'api/types';
import { CamelToSnakeKeys } from 'constants/types';
import { getDataWithCreatedData } from 'utils/objects';
import { transformFiltersForApi } from 'utils/helpers';
import { handleResetSelectedCells, setData } from './reducer';
import {
  AddDataType,
  ExclusiveType,
  UpdateDataType,
  GetExclusivesType,
} from './types';

export const getExclusives: GetExclusivesType =
  () =>
  async (dispatch, getState): Promise<void> => {
    const {
      exclusives: { rowsPerPage, page, orderBy, orderOption, filters },
    } = getState();

    const { data } = await Api.getAll<
      GetAllDataType<CamelToSnakeKeys<ExclusiveType>[]>
    >({
      path: PATHS.EXCLUSIVES,
      page,
      rowsPerPage,
      orderBy,
      orderOption,
      filters: transformFiltersForApi({
        filters,
        selectedTabName: 'exclusives',
      }),
    });

    const reformattedData = data?.data?.map(getDataWithCreatedData);

    dispatch(setData({ count: parseInt(data.count), data: reformattedData }));
  };

export const addExclusives =
  (data: AddDataType): AppThunk =>
  async dispatch => {
    try {
      if (!data.exclusives.length) return;

      await Api.add<AddDataType>({
        path: 'exclusives/add',
        data,
      });

      dispatch(getExclusives());
    } catch (e) {
      console.log(e);
    }
  };

export const removeExclusives = (): AppThunk => async (dispatch, getState) => {
  try {
    const {
      exclusives: { selectedCells },
    } = getState();

    await Api.remove({
      path: 'exclusives/remove',
      data: { ids: selectedCells },
    });

    dispatch(handleResetSelectedCells());
    dispatch(getExclusives());
  } catch (e) {
    console.log(e);
  }
};

export const updateExclusives =
  (data: UpdateDataType): AppThunk =>
  async dispatch => {
    try {
      if (!data.exclusives.length) return;

      await Api.update<UpdateDataType>({
        path: 'exclusives/update',
        data,
      });

      dispatch(handleResetSelectedCells());
      dispatch(getExclusives());
    } catch (e) {
      console.log(e);
    }
  };
