import { Express } from 'express';
import FlatsRoute from './Flats';
import HousesRoute from './Houses';
import ExclusivesRouter from './Exclusives';

export default class Routes {
  flatsRoute: FlatsRoute;

  housesRoute: HousesRoute;

  exclusivesRoute: ExclusivesRouter;

  app: Express;

  constructor(app: Express) {
    this.app = app;
    this.flatsRoute = new FlatsRoute();
    this.housesRoute = new HousesRoute();
    this.exclusivesRoute = new ExclusivesRouter();
  }

  init = (): void => {
    this.app.use('/flats', this.flatsRoute.router);
    this.app.use('/houses', this.housesRoute.router);
    this.app.use('/exclusives', this.exclusivesRoute.router);
  };
}
