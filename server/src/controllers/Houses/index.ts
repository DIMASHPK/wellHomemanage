import { Request, Response } from 'express';
import House from 'models/Houses';

export default class HouseController {
  public getAllHouses = (req: Request, res: Response) => {
    House.findAll<House>({ limit: 10 })
      .then((nodes: Array<House>) => res.json(nodes))
      .catch((err: Error) => {
        console.log(err);
        res.status(500).json(err);
      });
  };
}
