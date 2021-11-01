import { Response } from 'express';
import Exclusive from 'models/Exclusives';
import {
  handleBadRequestError,
  handleInternalServerError,
} from 'utils/handleError';
import { RequestWithTypedBody, RequestWithTypedQuery } from 'constants/types';
import { camelToSnakeKeysOfArrayObject } from 'utils/strings';
import { Op } from 'sequelize';
import { handleFindAllSqlQuery, handleWhereClause } from 'utils/handleFilters';
import Flat from 'models/Flats';
import { sequelize } from 'configs/db';
import { ExclusiveBodyType, ExclusiveRemoveBodyType } from './types';

export default class ExclusiveController {
  public getAllExclusives = async (
    req: RequestWithTypedQuery,
    res: Response
  ): Promise<void> => {
    const { query } = req;
    const { page, rowsPerPage, orderBy, orderOption, ...filters } = query;

    const findAllSqlQuery = handleFindAllSqlQuery({
      rowsPerPage,
      page,
      filters,
      orderOption,
      orderBy,
    });

    const whereClause = handleWhereClause(filters);

    try {
      const [data, count] = await Promise.allSettled([
        sequelize.query(`SELECT * FROM exclusive ${findAllSqlQuery}`),
        sequelize.query(`SELECT COUNT(*) FROM exclusive ${whereClause}`),
      ]);

      if (
        data.status === 'fulfilled' &&
        count.status === 'fulfilled' &&
        count?.value?.[0]?.[0]
      ) {
        const currentData = data.value?.[0] as Flat[];
        const currentCount = (count?.value?.[0]?.[0] as { count: string })
          .count;

        res.send({
          data: currentData,
          count: currentCount,
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

  public addExclusives = async (
    req: RequestWithTypedBody<ExclusiveBodyType>,
    res: Response
  ): Promise<void> => {
    const { body } = req;
    const { exclusives }: ExclusiveBodyType = body;

    if (!exclusives?.length) {
      return handleBadRequestError(res);
    }

    const snakeCaseExclusives = camelToSnakeKeysOfArrayObject(exclusives);

    try {
      const newExclusives = await Exclusive.bulkCreate<Exclusive>(
        snakeCaseExclusives
      );

      res.send({
        newExclusives,
      });
    } catch (err) {
      console.log(err);
      handleInternalServerError(res, err as Error);
    }
  };

  public removeExclusives = async (
    req: RequestWithTypedBody<ExclusiveRemoveBodyType>,
    res: Response
  ): Promise<void> => {
    const { body } = req;
    const { ids } = body;

    if (!ids.length) {
      return handleBadRequestError(res);
    }

    try {
      await Exclusive.destroy<Exclusive>({
        where: { id: { [Op.in]: ids } },
      });

      res.send({
        removedExclusivesIds: ids,
      });
    } catch (err) {
      console.log(err);
      handleInternalServerError(res, err as Error);
    }
  };

  public updateExclusives = async (
    req: RequestWithTypedBody<ExclusiveBodyType>,
    res: Response
  ): Promise<void> => {
    const { body } = req;
    const { exclusives } = body;

    if (!exclusives?.length) {
      return handleBadRequestError(res);
    }

    const snakeCaseExclusives = camelToSnakeKeysOfArrayObject(exclusives);

    try {
      await Promise.allSettled(
        snakeCaseExclusives.map(item =>
          Exclusive.update<Exclusive>({ ...item }, { where: { id: item.id } })
        )
      );

      res.send({
        newExclusives: exclusives,
      });
    } catch (err) {
      console.log(err);
      handleInternalServerError(res, err as Error);
    }
  };
}
