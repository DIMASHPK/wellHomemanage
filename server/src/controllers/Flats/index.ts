import { Request, Response } from 'express';
import Flat from 'models/Flats';
import { handleError } from 'utils/handleError';
import { handlePage } from 'utils/handlePage';

export default class FlatController {
  public getAllFlats = async (req: Request, res: Response): Promise<void> => {
    const { query } = req;
    const { page: queryPage, rowsPerPage } = query;

    const { page, limit, offset } = handlePage({
      rowsPerPage: rowsPerPage as string,
      page: queryPage as string,
    });

    try {
      const [data, count] = await Promise.allSettled([
        Flat.findAll<Flat>({
          limit,
          offset,
          order: [['id', 'ASC NULLS LAST']],
        }),
        Flat.count(),
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
