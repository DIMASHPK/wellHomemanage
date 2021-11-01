import { Request, Response } from 'express';
import Flat from 'models/Flats';
import {
  handleInternalServerError,
  handleBadRequestError,
} from 'utils/handleError';
import { FiltersType, getOptionalType } from 'constants/types';
import { camelToSnakeKeysOfArrayObject } from 'utils/strings';
import { Op } from 'sequelize';
import { handleFindAllSqlQuery, handleWhereClause } from 'utils/handleFilters';
import { sequelize } from 'configs/db';
import { SORT_OPTIONS_FROM_CLIENT } from 'constants/index';
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

    const findAllSqlQuery = handleFindAllSqlQuery({
      rowsPerPage: rowsPerPage as string,
      page: queryPage as string,
      filters: filters as unknown as FiltersType,
      orderOption: orderOption as getOptionalType<
        typeof SORT_OPTIONS_FROM_CLIENT
      >,
      orderBy: orderBy as string,
    });

    const whereClause = handleWhereClause(filters as unknown as FiltersType);

    try {
      const [data, count] = await Promise.allSettled([
        sequelize.query(`SELECT * FROM flats ${findAllSqlQuery}`),
        sequelize.query(`SELECT COUNT(*) FROM flats ${whereClause}`),
      ]);

      if (data.status === 'fulfilled' && count.status === 'fulfilled') {
        await res.send({
          data: data.value[0],
          count: (count as { value: { count: string }[][] })?.value?.[0]?.[0]
            ?.count,
          page: queryPage,
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
