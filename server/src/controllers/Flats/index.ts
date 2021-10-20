import { Request, Response } from 'express';
import Flat from 'models/Flats';
import {
  handleInternalServerError,
  handleBadRequestError,
} from 'utils/handleError';
import { handlePage } from 'utils/handlePage';
import { handleOrderBy } from 'utils/handleSort';
import { FiltersType, getOptionalType } from 'constants/types';
import { SORT_OPTIONS_FROM_CLIENT } from 'constants/index';
import { camelToSnakeKeysOfArrayObject } from 'utils/strings';
import { Op } from 'sequelize';
import { FlatBodyType, FlatRemoveBodyType } from './types';

export default class FlatController {
  public getAllFlats = async (req: Request, res: Response): Promise<void> => {
    const { query } = req;
    const {
      page: queryPage,
      rowsPerPage,
      orderBy,
      orderOption,
      ...filters
    } = query;

    const { page, limit, offset, where } = handlePage({
      rowsPerPage: rowsPerPage as string,
      page: queryPage as string,
      filters: filters as unknown as FiltersType,
    });

    const order = handleOrderBy({
      orderBy: orderBy as string,
      orderOption: orderOption as getOptionalType<
        typeof SORT_OPTIONS_FROM_CLIENT
      >,
    });

    try {
      const [data, count] = await Promise.allSettled([
        Flat.findAll<Flat>({
          limit,
          offset,
          order,
          where,
        }),
        Flat.count(),
      ]);

      if (data.status === 'fulfilled' && count.status === 'fulfilled') {
        await res.send({
          data: data.value,
          count: count.value,
          page,
          orderBy,
          orderOption,
        });
      }
    } catch (err) {
      console.log(err);
      handleInternalServerError(res, err as Error);
    }
  };

  public addFlats = async (req: Request, res: Response): Promise<void> => {
    const { body } = req;
    const { flats }: FlatBodyType = body;

    if (!flats?.length) {
      return handleBadRequestError(res);
    }

    const snakeCaseFlats = camelToSnakeKeysOfArrayObject(flats);

    try {
      const newFlats = await Flat.bulkCreate<Flat>(snakeCaseFlats);

      await res.send({
        newFlats,
      });
    } catch (err) {
      console.log(err);
      handleInternalServerError(res, err as Error);
    }
  };

  public removeFlats = async (req: Request, res: Response): Promise<void> => {
    const { body } = req;
    const { ids }: FlatRemoveBodyType = body;

    if (!ids.length) {
      return handleBadRequestError(res);
    }

    try {
      await Flat.destroy<Flat>({
        where: { id: { [Op.in]: ids } },
      });

      await res.send({
        removedFlatsIds: ids,
      });
    } catch (err) {
      console.log(err);
      handleInternalServerError(res, err as Error);
    }
  };

  public updateFlats = async (req: Request, res: Response): Promise<void> => {
    const { body } = req;
    const { flats }: FlatBodyType = body;

    if (!flats?.length) {
      return handleBadRequestError(res);
    }

    const snakeCaseFlats = camelToSnakeKeysOfArrayObject(flats);

    try {
      await Promise.allSettled(
        snakeCaseFlats.map(item =>
          Flat.update<Flat>({ ...item }, { where: { id: item.id } })
        )
      );

      await res.send({
        newFlats: flats,
      });
    } catch (err) {
      console.log(err);
      handleInternalServerError(res, err as Error);
    }
  };
}
