import { Request, Response } from 'express';
import Flat from 'models/Flats';
import { handleError } from 'utils/handleError';

export default class FlatController {
  public getAllFlats = async (req: Request, res: Response): Promise<void> => {
    try {
      const [data, count] = await Promise.allSettled([
        Flat.findAll<Flat>({ limit: 10 }),
        Flat.count(),
      ]);

      if (data.status === 'fulfilled' && count.status === 'fulfilled') {
        await res.send({ data: data.value, count: count.value });
      }
    } catch (err) {
      console.log(err);
      handleError(res, err as Error);
    }
  };
}
