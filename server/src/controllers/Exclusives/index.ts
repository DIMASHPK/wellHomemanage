import { Request, Response } from 'express';
import Exclusive from 'models/Exclusives';
import { handlePage } from 'utils/handlePage';
import {
  handleBadRequestError,
  handleInternalServerError,
} from 'utils/handleError';
import { handleOrderBy } from 'utils/handleSort';
import { getOptionalType } from 'constants/types';
import { SORT_OPTIONS_FROM_CLIENT } from 'constants/index';
import { camelToSnakeKeysOfArrayObject } from 'utils/strings';

export default class ExclusiveController {
  public getAllExclusives = async (
    req: Request,
    res: Response
  ): Promise<void> => {
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
        Exclusive.findAll<Exclusive>({
          limit,
          offset,
          order,
        }),
        Exclusive.count(),
      ]);

      if (data.status === 'fulfilled' && count.status === 'fulfilled') {
        await res.send({ data: data.value, count: count.value, page });
      }
    } catch (err) {
      console.log(err);
      handleInternalServerError(res, err as Error);
    }
  };

  public addExclusives = async (req: Request, res: Response): Promise<void> => {
    const { body } = req;
    const { exclusives } = body;

    if (!exclusives?.length) {
      return handleBadRequestError(res);
    }

    const snakeCaseExclusives = camelToSnakeKeysOfArrayObject(exclusives);

    try {
      const newExclusives = await Exclusive.bulkCreate<Exclusive>(
        snakeCaseExclusives
      );

      await res.send({
        newExclusives,
      });
    } catch (err) {
      console.log(err);
      handleInternalServerError(res, err as Error);
    }
  };
}
