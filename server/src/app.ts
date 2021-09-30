import './configs';
import cors from 'cors';
import express, { Express } from 'express';
import bodyParser from 'body-parser';
import { sequelize } from './configs/db';
import { CorsOptionsType } from './types/app';
import Routes from './routes';

const { PORT } = process.env;

class App {
  app: Express;

  corsOptions: CorsOptionsType;

  port: number;

  routesList: Routes;

  constructor() {
    this.app = express();

    this.corsOptions = {
      origin: ['http://localhost:3000'],
    };
    this.port = PORT ? parseInt(PORT) : 7777;
    this.routesList = new Routes(this.app);
  }

  private config = () => {
    this.app.use(cors(this.corsOptions));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(express.json());

    this.routesList.init();
  };

  public init = () => {
    this.config();

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
