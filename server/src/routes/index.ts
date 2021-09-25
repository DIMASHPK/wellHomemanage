import { Express } from 'express';
import FlatsRoute from './Flats';
import HousesRoute from './Houses';

export default class Routes {
  flatsRouter: FlatsRoute;

  housesRouter: HousesRoute;

  constructor(app: Express) {
    this.flatsRouter = new FlatsRoute();
    this.housesRouter = new HousesRoute();

    this.flatsRouter.routes(app);
    this.housesRouter.routes(app);
  }
}
