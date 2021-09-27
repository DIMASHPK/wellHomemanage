import { Express } from 'express';
import FlatsRoute from './Flats';
import HousesRoute from './Houses';
import ExclusivesRouter from './Exclusives';

export default class Routes {
  flatsRouter: FlatsRoute;

  housesRouter: HousesRoute;

  exclusivesRouter: ExclusivesRouter;

  constructor(app: Express) {
    this.flatsRouter = new FlatsRoute();
    this.housesRouter = new HousesRoute();
    this.exclusivesRouter = new ExclusivesRouter();

    this.flatsRouter.routes(app);
    this.housesRouter.routes(app);
    this.exclusivesRouter.routes(app);
  }
}
