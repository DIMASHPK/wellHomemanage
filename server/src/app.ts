import './configs';
import cors from 'cors';
import express, { Express } from 'express';
import bodyParser from 'body-parser';
import { sequelize } from './configs/db';
import Routes from './routes';

const { PORT } = process.env;

class App {
  app: Express;

  whiteList: string[];

  port: number;

  routesList: Routes;

  constructor() {
    this.app = express();
    this.whiteList = ['localhost:3000'];
    this.port = PORT ? parseInt(PORT) : 7777;
    this.routesList = new Routes(this.app);
  }

  private corsOptionsDelegate: cors.CorsOptionsDelegate<any> = (
    req,
    callback
  ) => {
    const corsOptions =
      this.whiteList.indexOf(req.header('Origin')) !== -1
        ? { origin: true }
        : { origin: false };
    callback(null, corsOptions);
  };

  private config = () => {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(express.json());
    this.app.use(cors(this.corsOptionsDelegate));

    this.app.listen(this.port, async () => {
      try {
        console.log(`server started at http://localhost:${this.port}`);

        await sequelize.authenticate();

        console.log('Connection has been established successfully.');

        console.log();
      } catch (e) {
        console.log(e);
      }
    });
  };

  public init = () => {
    this.app.listen(this.port, async () => {
      try {
        console.log(`server started at http://localhost:${this.port}`);

        await sequelize.authenticate();

        console.log('Connection has been established successfully.');

        console.log();
      } catch (e) {
        console.log(e);
      }
    });
  };
}

export default new App();
