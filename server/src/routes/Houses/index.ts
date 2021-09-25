import { Express } from 'express';
import HouseController from 'controllers/Houses';

/* eslint-disable no-unused-expressions */
export default class Houses {
  controller: HouseController;

  constructor() {
    this.controller = new HouseController();
  }

  public routes = (app: Express): void => {
    app.route('/houses').get(this.controller.getAllHouses);
  };
}
