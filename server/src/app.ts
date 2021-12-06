import './configs';
import cors from 'cors';
import express, { Express } from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { sequelize } from './configs/db';
import { CorsOptionsType } from './types/app';
import Routes from './routes';

const { PORT, NODE_ENV } = process.env;

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

    this.renderClient();
  };

  private renderClient = () => {
    if (NODE_ENV === 'production') {
      const clientBuiltPath = '/../../client/build';

      this.app.use('/', express.static(path.join(__dirname, clientBuiltPath)));

      this.app.get('*', (reqs, res) => {
        res.sendFile(path.join(__dirname, clientBuiltPath, 'index.html'));
      });
    }
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
