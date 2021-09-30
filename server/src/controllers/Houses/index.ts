import { Request, Response } from 'express';
import House from 'models/Houses';
import { handlePage } from 'utils/handlePage';
import {
  handleInternalServerError,
  handleBadRequestError,
} from 'utils/handleError';
import { handleOrderBy } from 'utils/handleSort';
import { getOptionalType } from 'constants/types';
import { SORT_OPTIONS_FROM_CLIENT } from 'constants/index';
import { camelToSnakeKeysOfArrayObject } from 'utils/strings';

export default class HouseController {
  public getAllHouses = async (req: Request, res: Response): Promise<void> => {
    const { query } = req;
    const { page: queryPage, rowsPerPage, orderBy, orderOption } = query;

    const { page, limit, offset } = handlePage({
      rowsPerPage: rowsPerPage as string,
      page: queryPage as string,
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
    const { houses } = body;

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
}
