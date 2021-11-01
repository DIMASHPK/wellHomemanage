import { Response } from 'express';
import Flat from 'models/Flats';
import {
  handleInternalServerError,
  handleBadRequestError,
} from 'utils/handleError';
import { RequestWithTypedBody, RequestWithTypedQuery } from 'constants/types';
import { camelToSnakeKeysOfArrayObject } from 'utils/strings';
import { Op } from 'sequelize';
import { handleFindAllSqlQuery, handleWhereClause } from 'utils/handleFilters';
import { sequelize } from 'configs/db';
import { FlatBodyType, FlatRemoveBodyType } from './types';

export default class FlatController {
  public getAllFlats = async (
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
        sequelize.query(`SELECT * FROM flats ${findAllSqlQuery}`),
        sequelize.query(`SELECT COUNT(*) FROM flats ${whereClause}`),
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

  public addFlats = async (
    req: RequestWithTypedBody<FlatBodyType>,
    res: Response
  ): Promise<void> => {
    const { body } = req;
    const { flats } = body;

    if (!flats?.length) {
      return handleBadRequestError(res);
    }

    const snakeCaseFlats = camelToSnakeKeysOfArrayObject(flats);

    try {
      const newFlats = await Flat.bulkCreate<Flat>(snakeCaseFlats);

      res.send({
        newFlats,
      });
    } catch (err) {
      console.log(err);
      handleInternalServerError(res, err as Error);
    }
  };

  public removeFlats = async (
    req: RequestWithTypedBody<FlatRemoveBodyType>,
    res: Response
  ): Promise<void> => {
    const { body } = req;
    const { ids } = body;

    if (!ids.length) {
      return handleBadRequestError(res);
    }

    try {
      await Flat.destroy<Flat>({
        where: { id: { [Op.in]: ids } },
      });

      res.send({
        removedFlatsIds: ids,
      });
    } catch (err) {
      console.log(err);
      handleInternalServerError(res, err as Error);
    }
  };

  public updateFlats = async (
    req: RequestWithTypedBody<FlatBodyType>,
    res: Response
  ): Promise<void> => {
    const { body } = req;
    const { flats } = body;

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

      res.send({
        newFlats: flats,
      });
    } catch (err) {
      console.log(err);
      handleInternalServerError(res, err as Error);
    }
  };
}
