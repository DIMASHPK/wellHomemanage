import { Request, Response } from 'express';
import House from 'models/Houses';
import { handlePage } from 'utils/handlePage';
import { handleError } from 'utils/handleError';

export default class HouseController {
  public getAllHouses = async (req: Request, res: Response): Promise<void> => {
    const { query } = req;
    const { page: queryPage, rowsPerPage } = query;

    const { page, limit, offset } = handlePage({
      rowsPerPage: rowsPerPage as string,
      page: queryPage as string,
    });

    try {
      const [data, count] = await Promise.allSettled([
        House.findAll<House>({
          limit,
          offset,
          order: [['id', 'ASC NULLS LAST']],
        }),
        House.count(),
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
