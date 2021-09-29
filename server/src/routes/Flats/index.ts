import { Router } from 'express';
import FlatController from 'controllers/Flats';

/* eslint-disable no-unused-expressions */
export default class Flats {
  controller: FlatController;

  router: Router;

  constructor() {
    this.controller = new FlatController();
    this.router = Router();

    this.routes();
  }

  public routes = (): void => {
    this.router.get('/', this.controller.getAllFlats);
  };
}
