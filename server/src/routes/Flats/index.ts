import { Express } from 'express';
import FlatController from 'controllers/flats';

/* eslint-disable no-unused-expressions */
export default class Flats {
  controller: FlatController;

  constructor() {
    this.controller = new FlatController();
  }

  public routes = (app: Express): void => {
    app.route('/flats').get(this.controller.getAllFlats);
  };
}
