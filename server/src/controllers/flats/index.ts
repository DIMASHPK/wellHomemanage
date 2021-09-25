import { Request, Response } from 'express';
import Flat from '../../models/Flats';

export default class FlatController {
  public getAllFlats = (req: Request, res: Response) => {
    Flat.findAll<Flat>({ limit: 10 })
      .then((nodes: Array<Flat>) => res.json(nodes))
      .catch((err: Error) => {
        console.log(err);
        res.status(500).json(err);
      });
  };
}
