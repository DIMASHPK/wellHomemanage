import { Request, Response } from 'express';
import Flat from 'models/Flats';
import { handleError } from 'utils/handleError';
import { handlePage } from 'utils/handlePage';
import { handleOrderBy } from 'utils/handleSort';
import { getOptionalType } from 'constants/types';
import { SORT_OPTIONS_FROM_CLIENT } from 'constants/index';

export default class FlatController {
  public getAllFlats = async (req: Request, res: Response): Promise<void> => {
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
        Flat.findAll<Flat>({
          limit,
          offset,
          order,
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
      handleError(res, err as Error);
    }
  };
}
