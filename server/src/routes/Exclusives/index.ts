import { Express } from 'express';
import ExclusiveController from 'controllers/Exclusives';

/* eslint-disable no-unused-expressions */
export default class Exclusives {
  controller: ExclusiveController;

  constructor() {
    this.controller = new ExclusiveController();
  }

  public routes = (app: Express): void => {
    app.route('/exclusives').get(this.controller.getAllExclusives);
  };
}
