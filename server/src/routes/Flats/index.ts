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
    this.router.post('/add', this.controller.addFlats);
    this.router.delete('/remove', this.controller.removeFlats);
    this.router.put('/update', this.controller.updateFlats);
  };
}
