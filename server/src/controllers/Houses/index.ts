import { Request, Response } from 'express';
import House from 'models/Houses';
import { handlePage } from 'utils/handlePage';
import {
  handleInternalServerError,
  handleBadRequestError,
} from 'utils/handleError';
import { handleOrderBy } from 'utils/handleSort';
import { FiltersType, getOptionalType } from 'constants/types';
import { SORT_OPTIONS_FROM_CLIENT } from 'constants/index';
import { camelToSnakeKeysOfArrayObject } from 'utils/strings';
import { Op } from 'sequelize';
import { HouseBodyType, HouseRemoveBodyType } from './types';

export default class HouseController {
  public getAllHouses = async (req: Request, res: Response): Promise<void> => {
    const { query } = req;
    const {
      page: queryPage,
      rowsPerPage,
      orderBy,
      orderOption,
      ...filters
    } = query;

    const { page, limit, offset } = handlePage({
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
        House.findAll<House>({
          limit,
          offset,
          order,
        }),
        House.count(),
      ]);

      if (data.status === 'fulfilled' && count.status === 'fulfilled') {
        await res.send({ data: data.value, count: count.value, page });
      }
    } catch (err) {
      console.log(err);
      handleInternalServerError(res, err as Error);
    }
  };

  public addHouses = async (req: Request, res: Response): Promise<void> => {
    const { body } = req;
    const { houses }: HouseBodyType = body;

    if (!houses?.length) {
      return handleBadRequestError(res);
    }

    const snakeCaseHouses = camelToSnakeKeysOfArrayObject(houses);

    try {
      const newHouses = await House.bulkCreate<House>(snakeCaseHouses);

      await res.send({
        newHouses,
      });
    } catch (err) {
      console.log(err);
      handleInternalServerError(res, err as Error);
    }
  };

  public removeHouses = async (req: Request, res: Response): Promise<void> => {
    const { body } = req;
    const { ids }: HouseRemoveBodyType = body;

    if (!ids.length) {
      return handleBadRequestError(res);
    }

    try {
      await House.destroy<House>({
        where: { id: { [Op.in]: ids } },
      });

      await res.send({
        removedHousesIds: ids,
      });
    } catch (err) {
      console.log(err);
      handleInternalServerError(res, err as Error);
    }
  };

  public updateHouses = async (req: Request, res: Response): Promise<void> => {
    const { body } = req;
    const { houses }: HouseBodyType = body;

    if (!houses?.length) {
      return handleBadRequestError(res);
    }

    const snakeCaseHouses = camelToSnakeKeysOfArrayObject(houses);

    try {
      await Promise.allSettled(
        snakeCaseHouses.map(item =>
          House.update<House>({ ...item }, { where: { id: item.id } })
        )
      );

      await res.send({
        newHouses: houses,
      });
    } catch (err) {
      console.log(err);
      handleInternalServerError(res, err as Error);
    }
  };
}
