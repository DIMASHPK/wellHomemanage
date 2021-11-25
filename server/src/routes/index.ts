import { Express } from 'express';
import { withAuth } from '../middlewares';
import FlatsRoute from './Flats';
import HousesRoute from './Houses';
import ExclusivesRoute from './Exclusives';
import UsersRoute from './Users';

export default class Routes {
  flatsRoute: FlatsRoute;

  housesRoute: HousesRoute;

  exclusivesRoute: ExclusivesRoute;

  usersRoute: UsersRoute;

  app: Express;

  constructor(app: Express) {
    this.app = app;
    this.flatsRoute = new FlatsRoute();
    this.housesRoute = new HousesRoute();
    this.exclusivesRoute = new ExclusivesRoute();
    this.usersRoute = new UsersRoute();
  }

  init = (): void => {
    this.app.use('/flats', withAuth, this.flatsRoute.router);
    this.app.use('/houses', withAuth, this.housesRoute.router);
    this.app.use('/exclusives', withAuth, this.exclusivesRoute.router);
    this.app.use('/user', this.usersRoute.router);
  };
}
