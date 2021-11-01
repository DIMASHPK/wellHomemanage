import { Response } from 'express';
import House from 'models/Houses';
import {
  handleInternalServerError,
  handleBadRequestError,
} from 'utils/handleError';
import { RequestWithTypedBody, RequestWithTypedQuery } from 'constants/types';
import { camelToSnakeKeysOfArrayObject } from 'utils/strings';
import { Op } from 'sequelize';
import { handleFindAllSqlQuery, handleWhereClause } from 'utils/handleFilters';
import Flat from 'models/Flats';
import { sequelize } from 'configs/db';
import { HouseBodyType, HouseRemoveBodyType } from './types';

export default class HouseController {
  public getAllHouses = async (
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
        sequelize.query(`SELECT * FROM houses ${findAllSqlQuery}`),
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

  public addHouses = async (
    req: RequestWithTypedBody<HouseBodyType>,
    res: Response
  ): Promise<void> => {
    const { body } = req;
    const { houses } = body;

    if (!houses?.length) {
      return handleBadRequestError(res);
    }

    const snakeCaseHouses = camelToSnakeKeysOfArrayObject(houses);

    try {
      const newHouses = await House.bulkCreate<House>(snakeCaseHouses);

      res.send({
        newHouses,
      });
    } catch (err) {
      console.log(err);
      handleInternalServerError(res, err as Error);
    }
  };

  public removeHouses = async (
    req: RequestWithTypedBody<HouseRemoveBodyType>,
    res: Response
  ): Promise<void> => {
    const { body } = req;
    const { ids } = body;

    if (!ids.length) {
      return handleBadRequestError(res);
    }

    try {
      await House.destroy<House>({
        where: { id: { [Op.in]: ids } },
      });

      res.send({
        removedHousesIds: ids,
      });
    } catch (err) {
      console.log(err);
      handleInternalServerError(res, err as Error);
    }
  };

  public updateHouses = async (
    req: RequestWithTypedBody<HouseBodyType>,
    res: Response
  ): Promise<void> => {
    const { body } = req;
    const { houses } = body;

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

      res.send({
        newHouses: houses,
      });
    } catch (err) {
      console.log(err);
      handleInternalServerError(res, err as Error);
    }
  };
}
