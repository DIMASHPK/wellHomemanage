import { Router } from 'express';
import ExclusiveController from 'controllers/Exclusives';

/* eslint-disable no-unused-expressions */
export default class Exclusives {
  controller: ExclusiveController;

  router: Router;

  constructor() {
    this.controller = new ExclusiveController();

    this.router = Router();

    this.routes();
  }

  public routes = (): void => {
    this.router.get('/', this.controller.getAllExclusives);
    this.router.post('/add', this.controller.addExclusives);
    this.router.delete('/remove', this.controller.removeExclusives);
    this.router.put('/update', this.controller.updateExclusives);
  };
}
