import Api from 'api';
import { PATHS } from 'api/constants';
import { AppThunk } from 'redux/types';
import { objectKeysToCamelFromSnakeCase } from 'utils/strings';
import { GetAllDataType } from 'api/types';
import { handleResetSelectedCells, setData } from './reducer';
import { AddDataType, ExclusiveType, UpdateDataType } from './types';

export const getExclusives =
  (): AppThunk =>
  async (dispatch, getState): Promise<void> => {
    const {
      exclusives: { rowsPerPage, page, orderBy, orderOption },
    } = getState();

    const { data } = await Api.getAll<GetAllDataType<ExclusiveType[]>>({
      path: PATHS.EXCLUSIVES,
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
