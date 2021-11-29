import { Router } from 'express';
import UsersController from 'controllers/Users';

export default class Houses {
  controller: UsersController;

  router: Router;

  constructor() {
    this.controller = new UsersController();

    this.router = Router();

    this.routes();
  }

  public routes = (): void => {
    this.router.post('/signup', this.controller.signUp);
    this.router.post('/signin', this.controller.signIn);
  };
}
