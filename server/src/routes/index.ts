import { Express } from 'express';
import FlatsRoute from './Flats';

export default class Routes {
  flatsRouter: FlatsRoute;

  constructor(app: Express) {
    this.flatsRouter = new FlatsRoute();

    this.flatsRouter.routes(app);
  }
}
