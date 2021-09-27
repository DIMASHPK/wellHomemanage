import { Request, Response } from 'express';
import Exclusive from 'models/Exclusives';

export default class ExclusiveController {
  public getAllExclusives = (req: Request, res: Response) => {
    Exclusive.findAll<Exclusive>({ limit: 10 })
      .then((nodes: Array<Exclusive>) => res.json(nodes))
      .catch((err: Error) => {
        console.log(err);
        res.status(500).json(err);
      });
  };
}
