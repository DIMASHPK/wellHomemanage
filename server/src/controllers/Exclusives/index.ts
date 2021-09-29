import { Request, Response } from 'express';
import Exclusive from 'models/Exclusives';
import { handlePage } from 'utils/handlePage';
import { handleError } from 'utils/handleError';

export default class ExclusiveController {
  public getAllExclusives = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const { query } = req;
    const { page: queryPage, rowsPerPage } = query;

    const { page, limit, offset } = handlePage({
      rowsPerPage: rowsPerPage as string,
      page: queryPage as string,
    });

    try {
      const [data, count] = await Promise.allSettled([
        Exclusive.findAll<Exclusive>({
          limit,
          offset,
          order: [['id', 'ASC NULLS LAST']],
        }),
        Exclusive.count(),
      ]);

      if (data.status === 'fulfilled' && count.status === 'fulfilled') {
        await res.send({ data: data.value, count: count.value, page });
      }
    } catch (err) {
      console.log(err);
      handleError(res, err as Error);
    }
  };
}
