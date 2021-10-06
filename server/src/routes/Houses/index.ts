import { Router } from 'express';
import HouseController from 'controllers/Houses';

/* eslint-disable no-unused-expressions */
export default class Houses {
  controller: HouseController;

  router: Router;

  constructor() {
    this.controller = new HouseController();

    this.router = Router();

    this.routes();
  }

  public routes = (): void => {
    this.router.get('/', this.controller.getAllHouses);
    this.router.post('/add', this.controller.addHouses);
    this.router.delete('/remove', this.controller.removeHouses);
    this.router.put('/update', this.controller.updateHouses);
  };
}
